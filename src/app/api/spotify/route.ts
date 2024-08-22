import { getNowPlaying } from './api'

export const revalidate = 30

type SpotifySong = {
  isPlaying: boolean
  artist: string
  album: string
  albumImageURL: string
  title: string
  songURL: string
}

export async function GET(request: Request) {
  const nowPlaying = await getNowPlaying()
  // console.log('\n --- now playing response ---\n', nowPlaying, '\n')

  if (nowPlaying.status === 204 || nowPlaying.status > 400) {
    // console.log('\nInvalid response in now-playing.ts\n', nowPlaying)
    return nowPlaying
  }

  const song = await nowPlaying.json()
  // console.log('\n --- song ---\n', song, '\n')

  if (!song.item && !song.currently_playing_type) {
    // console.log('\nNot playing anything in now-playing.ts\n', nowPlaying)
    return { isPlaying: false }
  }

  const isPlaying = song.is_playing
  let title = song.item?.name
  let artist = song.item?.artists.map((artist: { name: string }) => artist.name).join(', ')
  const album = song.item.album.name
  const albumImageURL = song.item.album.images[0].url
  const songURL = song.item?.external_urls.spotify

  if (isPlaying && song.currently_playing_type === 'episode') {
    title = 'Listening to a Podcast'
    artist = 'on Spotify'
  }

  const body: SpotifySong = {
    isPlaying,
    artist,
    album,
    albumImageURL,
    title,
    songURL,
  }

  return Response.json(body)
}

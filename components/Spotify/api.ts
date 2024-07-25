import { NowPlaying } from './types'

const clientID = process.env.SPOTIFY_ID
const clientSecret = process.env.SPOTIFY_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(clientID + ':' + clientSecret).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=refresh_token&refresh_token=' + refreshToken,
  })

  return response.json()
}

const callSpotify = async () => {
  const response = await getAccessToken()
  // console.log('response response', response)

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${response.access_token}`,
    },
  })
}

export async function getNowPlaying(): Promise<NowPlaying> {
  const response = await callSpotify()
  console.log('\n --- now playing response ---\n', response, '\n')

  if (response.status === 204 || response.status > 400) {
    // console.log('\nInvalid response in now-playing.ts\n', response)
    return { isPlaying: false }
  }

  const song = await response.json()
  // console.log('\n --- song ---\n', song, '\n')

  if (!song.item && !song.currently_playing_type) {
    // console.log('\nNot playing anything in now-playing.ts\n', response)
    return { isPlaying: false }
  }

  const isPlaying = song.is_playing
  let title = song.item?.name
  let artist = song.item?.artists.map((artist: { name: string }) => artist.name).join(', ')
  // const album = song.item.album.name
  // const albumImageUrl = song.item.album.images[0].url
  const songURL = song.item?.external_urls.spotify

  if (isPlaying && song.currently_playing_type === 'episode') {
    title = 'Listening to a Podcast'
    artist = 'on Spotify'
  }

  // res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return {
    artist,
    isPlaying,
    songURL,
    title,
  }
}

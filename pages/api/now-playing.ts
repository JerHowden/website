import { getNowPlaying } from "../../lib/spotify"

export default async function handler(_: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { isPlaying: any; album?: any; albumImageUrl?: any; artist?: any; songUrl?: any; title?: any }): any; new(): any } }; setHeader: (arg0: string, arg1: string) => void }): Promise<any> {
	const response = await getNowPlaying()
	console.log('logging...', response)
  
	if (response.status === 204 || response.status > 400) {
		console.log('Invalid response in now-playing.ts \n', response)
		return res.status(200).json({ isPlaying: false })
	}

	const song = await response.json()
		
	if (song.item === null) {
		console.log('Not playing anything in now-playing.ts \n', response)
		return res.status(200).json({ isPlaying: false })
	}

	const isPlaying = song.is_playing
	const title = song.item.name
	const artist = song.item.artists.map((artist: { name: string }) => artist.name).join(', ')
	const album = song.item.album.name
	const albumImageUrl = song.item.album.images[0].url
	const songUrl = song.item.external_urls.spotify

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=60, stale-while-revalidate=30'
	)

	return res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title
	})

}
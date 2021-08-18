import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Footer from '../components/Footer'


export default function Home(props: { spotify: any }) {

	return (
		<div className='flex flex-col'>
			<Head>
				<title>{'jeremiah howden'}</title>
				<meta name="description" content="This is my website, built with nextjs, typescript, and tailwind, deployed with vercel, and includes a collection of different facets of my life." />
				<link rel="icon" href="/jhdot.svg" />
			</Head>

			<main className=''>
				<div className='flex flex-col gap-y-4'>
					<Header />
					<About />
					<Projects />
					<Resume />
					<Footer spotify={ props.spotify } />
				</div>
			</main>

		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {

	// give spotify permission
	const codeReq = await fetch(`https://accounts.spotify.com/en/authorize?client_id=${process.env.SPOTIFY_ID}&response_type=code&redirect_uri=${process.env.SPOTIFY_CALLBACK}&state=${process.env.SPOTIFY_STATE}&scope=user-read-currently-playing`)
	const codeParams = new URLSearchParams(window.location.search)
	if(codeParams.get('state') !== process.env.SPOTIFY_STATE) {
		console.error('STATES DONT MATCH ON SPOTIFY AUTHORIZATION')
		return { props: {} }
	}

	// authorize with spotify to get token
	const tokenHeaders: HeadersInit = new Headers()
	tokenHeaders.set('Content-Type', 'application/x-www-form-urlencoded')
	const tokenReq = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: tokenHeaders,
		body: `grant_type=authorization_code&code=${codeParams.get('code')}&redirect_uri=${process.env.SPOTIFY_CALLBACK}&client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}`
	})
	console.log(tokenReq.status, tokenReq)

	const spotifyAuth = await tokenReq.json()
	console.log(spotifyAuth)

	// get current playing song with fresh token
	const requestHeaders: HeadersInit = new Headers()
	requestHeaders.set('Authorization', 'Bearer ' + spotifyAuth.access_token)
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
		method: 'GET',
		headers: requestHeaders
	})
	const spotifyData = await res.json()
	console.log(spotifyData)

    return {
        props: {
            spotify: spotifyData
        }
    }
}

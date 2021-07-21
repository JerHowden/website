import Head from 'next/head'
import Image from 'next/image'

import Navigation from '../components/Navigation'

export default function Home() {
	return (
		<div>
			<Head>
				<title>{'Jeremiah\'s Website'}</title>
				<meta name="description" content="This is my website, built with nextjs, typescript, and tailwind, deployed with vercel, and includes a collection of different facets of my life." />
				<link rel="icon" href="/jh.svg" />
			</Head>

			<Navigation />

			<main>
				yo
			</main>

			<footer>

			</footer>
		</div>
	)
}

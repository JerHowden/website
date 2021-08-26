import Head from 'next/head'

import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Footer from '../components/Footer'


export default function Home() {

	return (
		<div className='flex flex-col bg'>
			<Head>
				<title>{'Jeremiah Howden'}</title>
				<meta name='description' content='This is my website, built with next.js, typescript, and tailwind, deployed with vercel. Take a look around!'/>
				<link rel='icon' href='/jhdot.svg'/>
				<link rel='apple-touch-icon' href='/jhdot.svg'/>
				<link rel='apple-touch-icon' href='/jhdot-black.png' media='(prefers-color-scheme:no-preference)'/>
				<link rel='apple-touch-icon' href='/jhdot-white.png' media='(prefers-color-scheme:dark)'/>
				<link rel='apple-touch-icon' href='/jhdot-black.png' media='(prefers-color-scheme:light)'/>
			</Head>

			<main className=''>
				<div className='flex flex-col items-center gap-y-4'>
					<Header />
					<About />
					<Projects />
					<Resume />
					<Footer />
				</div>
			</main>

		</div>
	)
}
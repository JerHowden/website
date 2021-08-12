import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Head>
				<title>{'Jeremiah Howden'}</title>
				<meta name="description" content="This is my website, built with nextjs, typescript, and tailwind, deployed with vercel, and includes a collection of different facets of my life." />
				<link rel="icon" href="/jhdot.svg" />
			</Head>

			<main className='flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-teal-200 to-teal-500'>
				<div className='w-4/5 min-h-full lg:w-1/2'>
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

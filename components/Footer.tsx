import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSWR from 'swr'

import footerEmail from '../public/email-footer.svg'
import fetcher from '../lib/fetcher'

function Footer(): JSX.Element {

	const { data } = useSWR('/api/now-playing', fetcher)

	return(
		<footer className='flex flex-col w-full max-w-3xl p-4'>
			{/* TODO : Modal popout for contact */}
			<a href='mailto:jeremiah@jeremiahhowden.com' title='contact me' className='w-full text-center'> 
				<div className='relative w-full h-12 sm:h-16 md:my-3'>
					<Image
						src='/email-footer.svg'
						alt='jeremiah@jeremiahhowden.com'
						layout='fill'
						className='dark:invert'
					/>
				</div>
			</a>
			<hr/>
			<div className='flex flex-col justify-between h-auto mt-6 sm:flex-row gap-y-6'>
				<div className='flex flex-col justify-between order-last gap-y-6 sm:order-first'>
					<div>
						<div className='text-sm lg:text-xl ml-0.5 text-gray-800 dark:text-gray-200'>Jeremiah Howden</div>
						<div className='-mt-1 text-xs text-gray-700 dark:text-gray-300 lg:text-base'>Software Developer</div>
					</div>
					<div className='flex flex-row items-center text-gray-400 gap-x-2 group' title={data?.isPlaying ? ( data?.songUrl ? 'link to what i\'m listening to' : 'what i\'m listening to') : 'spotify inactive'}>
						<FontAwesomeIcon icon={['fab', 'spotify']} className={`w-7 h-7 ${data?.isPlaying ? 'text-green-600 dark:text-green-500  animate-pulse md:h-9 md:w-9' : 'group-hover:animate-none'} ${data?.songUrl ? 'group-hover:text-black dark:group-hover:text-white' : ''}`} />
						{data?.isPlaying ?
							<a className={`flex flex-col gap-x-2 ${data?.songUrl ? '' : ' pointer-events-none'}`} href={data?.songUrl || ''}>
								<div className={`text-sm font-medium text-green-700 dark:text-green-400 md:text-base ${data?.songUrl ? 'dark:group-hover:text-white group-hover:text-black' : ''}`}>{data?.title || ''}</div>
								<div className={`text-xs text-green-600 dark:font-light dark:text-green-500 ${data?.songUrl ? 'group-hover:text-black dark:group-hover:text-white' : ''}`}>{data?.artist || ''}</div>
							</a>
						:
							<div>Not Playing</div>
						}
						<span className={`hidden text-xl text-black ${data?.isPlaying && data?.songUrl ? 'group-hover:inline' : ''} dark:text-white`}>↗</span>
					</div>
					<div className='flex text-gray-600 dark:text-gray-400'>© {new Date().getFullYear()} Jeremiah Howden</div>
				</div>
				<div className='flex flex-col gap-y-0.5 text-left sm:text-right'>
					<div className=''>
						<Link href='/resume'>
							<a title='résumé' className='p-0.5 lg:text-lg link'>resume</a>
						</Link>
					</div>
					<div className=''>
						<a href='https://www.github.com/JerHowden' title='github ↗' className='p-0.5 lg:text-lg link'>github</a>
					</div>
					<div className=''>
						<a href='https://www.linkedin.com/in/jeremiah-howden' title='linkedin ↗' className='p-0.5 lg:text-lg link'>linkedin</a>
					</div>
					<div className=''>
						<a href='https://www.twitter.com/jeremiah_howden' title='twitter ↗' className='p-0.5 lg:text-lg link'>twitter</a>
					</div>
					<div className=''>
						<a href='https://dev.to/jerhowden' title='dev blog ↗' className='p-0.5 lg:text-lg link'>
							dev blog
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
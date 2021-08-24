import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'

function Footer(): JSX.Element {

	const { data } = useSWR('/api/now-playing', fetcher)
	console.log(data)

	return(
		<footer className='flex flex-col w-full h-auto px-12 pb-12 bg-gray-800 border-t border-gray-700'>
			{/* TODO : Modal popout for contact */}
			<a href='mailto:jeremiah@jeremiahhowden.com' title='contact me' className='w-full text-center'> 
				<div className='relative w-full -my-6 md:-my-3 lg:my-0 xl:my-3 2xl:my-6' style={{ height: '12vh' }}>
					<Image
						src='/email-footer.svg'
						alt='jeremiah@jeremiahhowden.com'
						layout='fill'
					/>
				</div>
			</a>
			<hr/>
			<div className='flex flex-col justify-between h-auto mt-6 sm:flex-row gap-y-6'>
				<div className='flex flex-col justify-between order-last gap-y-6 sm:order-first'>
					<div>
						<div className='text-sm lg:text-xl ml-0.5'>jeremiah howden</div>
						<div className='-mt-1 text-xs text-gray-300 lg:text-base'>software developer</div>
					</div>
					<div className='flex flex-row items-center text-gray-400 gap-x-2'>
						<FontAwesomeIcon icon={['fab', 'spotify']} className={`w-4 h-4 sm:w-7 sm:h-7 ${data?.isPlaying ? 'text-green-500 animate-pulse md:h-9 md:w-9' : ''}`} />
						{data?.isPlaying ?
							<a className={`flex flex-col gap-x-2 ${data?.songUrl ? 'group ' : ' pointer-events-none'}`} href={data?.songUrl || ''}>
								<div className='text-sm font-medium text-green-400 md:text-base group-hover:text-green-300'>{data?.title || 'Runway Houses City Clouds'}</div>
								<div className='text-xs font-light text-green-500 group-hover:text-green-400'>{data?.artist || 'Tame Impala, Mac Demarco'}</div>
							</a>
						:
							<div>Not Playing</div>
						}
						
					</div>
					<div className='flex text-gray-500'>© {new Date().getFullYear()} Jeremiah Howden</div>
				</div>
				<div className='flex flex-col text-left sm:text-right'>
					<div className='flex-1'>
						<Link href='/resume'>
							<a title='résumé' className='p-0 lg:text-lg link'>resume</a>
						</Link>
					</div>
					<div className='flex-1'>
						<a href='https://www.github.com/JerHowden' title='github ↗' className='p-0 lg:text-lg link'>github</a>
					</div>
					<div className='flex-1'>
						<a href='https://www.linkedin.com/in/jeremiah-howden' title='linkedin ↗' className='p-0 lg:text-lg link'>linkedin</a>
					</div>
					<div className='flex-1'>
						<a href='https://www.twitter.com/jeremiah_howden' title='twitter ↗' className='p-0 lg:text-lg link'>twitter</a>
					</div>
					<div className='flex-1'>
						<a href='https://dev.to/jerhowden' title='dev blog ↗' className='p-0 lg:text-lg link'>
							dev blog
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
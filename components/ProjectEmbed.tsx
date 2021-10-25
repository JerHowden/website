import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface types {
	title: string,
	url?: string,
	tagIDs: string[],
	year: string,
	desc: React.ReactFragment,
	repoURL?: string
}

function ProjectEmbed({ title, url, tagIDs, year, desc, repoURL}: types): JSX.Element {

	const [open, setOpen] = useState(false)
	const size = 24

	function Tag(tagID: string, key: string | number): JSX.Element {
		let icon, href
		switch(tagID) {
			case 'Baseweb': 	icon = <Image src='/icons/baseweb.svg' width={size} height={size} alt='BW' title='Baseweb UI' className='filter dark:invert' />
								href = 'https://baseweb.design/'
								break
			case 'Bootstrap':	icon = <FontAwesomeIcon icon={['fab', 'bootstrap']} width={size} height={size*.8} title='Bootstrap' />
								href = 'https://getbootstrap.com/'
								break
			case 'Figma': 		icon = <Image src='/icons/figma.svg' width={size*0.7} height={size} alt='FG' title='Figma' className='filter grayscale brightness-50 dark:brightness-150' />
								href = 'https://www.figma.com/'
								break
			case 'GitHub': 		icon = <FontAwesomeIcon icon={['fab', 'github']} width={size} height={size} title='GitHub' />
								href = repoURL
								break
			case 'Golang': 		icon = <Image src='/icons/golang.png' width={size*.75} height={size} alt='GO' title='Golang' className='filter grayscale brightness-75 dark:brightness-110' />
								href = 'https://golang.org/'
								break
			case 'Google Cloud': icon = <Image src='/icons/google-cloud.svg' width={size} height={size*.7} alt='GC' title='Google Cloud' className=' filter grayscale brightness-50 dark:brightness-150' />
								href = 'https://cloud.google.com/'
								break
			case 'JavaScript':  icon = <FontAwesomeIcon icon={['fab', 'js']} width={size} height={size} title='JavaScript' />
								href = 'https://www.javascript.com/'
								break
			case 'Mapbox': 		icon = <Image src='/icons/mapbox.svg' width={size} height={size} alt='MB' title='Mapbox' className='filter dark:invert' />
								href = 'https://www.mapbox.com/'
								break
			case 'MySQL': 		icon = <Image src='/icons/mysql.png' width={size} height={size*.66} alt='MySQL' title='MySQL' className='!h-auto !min-h-0 filter grayscale brightness-0 dark:brightness-150' />
								href = 'https://www.mysql.com/'
								break
			case 'Next.js': 	icon = <Image src='/icons/next-js.svg' width={size} height={size} alt='NX' title='Next.js' className='filter dark:invert' />
								href = 'https://nextjs.org/'
								break
			case 'PowerShell': 	icon = <Image src='/icons/powershell.svg' width={size} height={size} alt='PS' title='PowerShell' className='filter dark:invert'/>
								href = 'https://docs.microsoft.com/en-us/powershell/'
								break
			case 'React': 		icon = <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React' />
								href = 'https://reactjs.org/'
								break
			case 'React Native': icon = <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React Native' />
								href = 'https://reactnative.dev/'
								break
			case 'Repository':  icon = <FontAwesomeIcon icon='archive' width={size} height={size} title='Repository' />
								href = repoURL
								break
			case 'Spotify API': icon = <FontAwesomeIcon icon={['fab', 'spotify']} width={size} height={size} title='Spotify API' />
								href = 'https://developer.spotify.com/'
								break
			case 'Tailwind CSS': icon = <Image src='/icons/tailwind.svg' width={size} height={size} alt='TW' title='Tailwind CSS' className='filter dark:invert' />
								href = 'https://tailwindcss.com/'
								break
			case 'TypeScript': 	icon = <Image src='/icons/ts.svg' width={size} height={size} alt='TS' title='TypeScript' className='filter dark:invert' />
								href = 'https://www.typescriptlang.org/'
								break
			case 'Vercel': 		icon = <Image src='/icons/vercel.svg' width={size} height={size} alt='VC' title='Vercel' className='filter dark:invert' />
								href = 'https://vercel.com/'
								break
			default: 			icon = <span/>
								href = ''
		}

		return (
			<div key={key} className='flex flex-row align-bottom gap-x-2 group'>
				<span className='flex w-6 h-6 text-gray-800 align-bottom dark:text-gray-200'>{icon}</span>
				<a href={href} className='p-0 link' title={tagID + ' ↗'}>{tagID}</a>
			</div>
		)
	}

	return (
		<div className='flex flex-col w-full border border-gray-200 rounded dark:border-gray-800'>
			<button 
				onClick={() => setOpen(prevOpen => (!prevOpen))} 
				className={`${open ? 'border-b rounded-b-none' : ''} p-4 transition-colors duration-75 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900`}
			>
				<div className='flex flex-row items-center justify-between w-full'>
					<div className='flex flex-col'>
						<div className='text-left title'>{title}</div>
						<div className='text-sm font-light tracking-wide text-left text-gray-600 dark:text-gray-400'>
							{year}
						</div>
					</div>
					<span>{open ? <FontAwesomeIcon icon='chevron-up' width={24} height={24} /> : <FontAwesomeIcon icon='chevron-down' width={24} height={24} />}</span>
				</div>
			</button>
			{ open ?
				<div className='w-full h-full p-4 transition-transform'>
					<div className='flex flex-row gap-x-4'>
						<div className='flex flex-col items-center w-3/4 text-left text-gray-700 dark:text-gray-300'>
							{desc}
							{url && <a className='text-lg text-center w-36 link' style={{ width: '8.75rem' }} href={url}>Project Link ↗</a>}
						</div>
						<div className='h-auto border-l border-gray-200 dark:border-gray-800'/>
						<aside className='flex flex-col w-1/4 gap-y-2'>
							{tagIDs.map((tag, key) => Tag(tag, key))}
						</aside>
					</div>
				</div>
			: null }
		</div>
	)
}

export default ProjectEmbed
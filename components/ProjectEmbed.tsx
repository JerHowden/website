import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface types {
	title: string,
	url: string,
	tagIDs: string[],
	year: string,
	desc: string,
	githubURL?: string
}

function ProjectEmbed({ title, url, tagIDs, year, desc, githubURL}: types): JSX.Element {

	const [open, setOpen] = useState(false)
	const size = 24

	function Tag(tagID: string): JSX.Element {
		switch(tagID) {
			case 'Baseweb': 	return <Image src='/icons/baseweb.svg' width={size} height={size} alt='BW' title='Baseweb UI' className='filter dark:invert' />
			case 'Bootstrap':	return <FontAwesomeIcon icon={['fab', 'bootstrap']} width={size*1.25} height={size} title='Bootstrap' />
			case 'Figma': 		return <Image src='/icons/figma.svg' width={size*0.7} height={size} alt='FG' title='Figma' className='filter grayscale brightness-50 dark:brightness-150' />
			case 'GitHub': 		return <a className='w-full text-gray-800 dark:text-gray-200' href={githubURL} title='GitHub ↗'><FontAwesomeIcon icon={['fab', 'github']} width={size} height={size} /></a>
			case 'Golang': 		return <Image src='/icons/golang.png' width={3*size/4} height={size} alt='GO' title='Golang' className='filter grayscale brightness-75 dark:brightness-110' />
			case 'Google Cloud': return <Image src='/icons/google-cloud.svg' width={size*1.3} height={size} alt='GC' title='Google Cloud' className=' filter grayscale brightness-50 dark:brightness-150' />
			case 'JavaScript':  return <FontAwesomeIcon icon={['fab', 'js']} width={size} height={size} title='JavaScript' />
			case 'Mapbox': 		return <Image src='/icons/mapbox.svg' width={size} height={size} alt='MB' title='Mapbox' className='filter dark:invert' />
			case 'MySQL': 		return <Image src='/icons/mysql.png' width={size*1.5} height={size} alt='MySQL' title='MySQL' className='filter grayscale brightness-0 dark:brightness-150' />
			case 'Next.js': 	return <Image src='/icons/next-js.svg' width={size} height={size} alt='NX' title='Next.js' className='filter dark:invert' />
			case 'PowerShell': 	return <Image src='/icons/powershell.svg' width={size} height={size} alt='PS' title='PowerShell' className='filter dark:invert'/>
			case 'React': 		return <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React' />
			case 'React Native': return <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React Native' />
			case 'Spotify API': return <FontAwesomeIcon icon={['fab', 'spotify']} width={size} height={size} title='Spotify API' />
			case 'Tailwind CSS': return <Image src='/icons/tailwind.svg' width={size} height={size} alt='TW' title='Tailwind CSS' className='filter dark:invert' />
			case 'TypeScript': 	return <Image src='/icons/ts.svg' width={size} height={size} alt='TS' title='TypeScript' className='filter dark:invert' />
			case 'Vercel': 		return <Image src='/icons/vercel.svg' width={size} height={size} alt='VC' title='Vercel' className='filter dark:invert' />
			default: 			return <span/>
		}
	}

	const old = false
	if(old) {
		return(
			<div className='flex flex-col w-full p-4 border border-gray-200 rounded dark:border-gray-800'>
				<div>
					<a href={url} title={title + ' ↗'} className='p-0 title link'>{title}</a>
				</div>
				<div className='mb-6 text-lg font-light tracking-wide text-gray-600 dark:text-gray-400'>
					{desc}
				</div>
				<div className='flex flex-row align-bottom gap-x-3'>
					{tagIDs.map((tag, key) => 
						<span key={key} className='flex text-gray-800 align-bottom dark:text-gray-200'>{Tag(tag)}</span>
					)}
				</div>
			</div>
		)
	}

	return (
		<button 
			onClick={() => setOpen(prevOpen => (!prevOpen))} 
			className='flex flex-col w-full p-4 transition-colors border border-gray-200 rounded cursor-default group dark:border-gray-800 hover:border-gray-700 dark:hover:border-gray-300'
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
			{ open ?
				<div className='w-full pt-4 mt-4 transition-colors border-t border-gray-200 dark:border-gray-800 group-hover:border-gray-700 dark:group-hover:border-gray-300'>
					<div className='flex flex-row gap-x-4'>
						<p className='flex-grow w-3/4 text-left'>
							{desc}
						</p>
						<div className='h-auto transition-colors border-l border-gray-200 dark:border-gray-800 group-hover:border-gray-700 dark:group-hover:border-gray-300'/>
						<aside className='flex flex-col w-1/4 gap-y-2'>
							{tagIDs.map((tag, key) => 
								<div key={key} className='flex flex-row align-bottom gap-x-2 group'>
									<span className='flex text-gray-800 align-bottom dark:text-gray-200'>{Tag(tag)}</span>
									<span className='p-0 link'>{tag}</span>
								</div>
							)}
						</aside>
					</div>
				</div>
			: null }
		</button>
	)
}

export default ProjectEmbed
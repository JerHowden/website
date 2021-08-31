import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface types {
	title: string,
	url: string,
	tagIDs: string[],
	desc: string,
	githubURL?: string
}

function ProjectEmbed({ title, url, tagIDs, desc, githubURL}: types): JSX.Element {

	const size = 24

	function Tag(tagID: string): JSX.Element {
		switch(tagID) {
			case 'baseweb': 	return <Image src='/icons/baseweb.svg' width={size} height={size} alt='BW' title='Baseweb UI' className='filter dark:invert' />
			case 'bootstrap':	return <FontAwesomeIcon icon={['fab', 'bootstrap']} width={size*1.25} height={size} title='Bootstrap' />
			case 'figma': 		return <Image src='/icons/figma.svg' width={size*0.7} height={size} alt='FG' title='Figma' className='filter grayscale brightness-50 dark:brightness-150' />
			case 'github': 		return <a className='w-full text-gray-800 dark:text-gray-200' href={githubURL} title='GitHub ↗'><FontAwesomeIcon icon={['fab', 'github']} width={size} height={size} /></a>
			case 'golang': 		return <Image src='/icons/golang.png' width={3*size/4} height={size} alt='GO' title='Golang' className='filter grayscale brightness-75 dark:brightness-110' />
			case 'googlecloud': return <Image src='/icons/google-cloud.svg' width={size*1.3} height={size} alt='GC' title='Google Cloud' className=' filter grayscale brightness-50 dark:brightness-150' />
			case 'js': 			return <FontAwesomeIcon icon={['fab', 'js']} width={size} height={size} title='JavaScript' />
			case 'mapbox': 		return <Image src='/icons/mapbox.svg' width={size} height={size} alt='MB' title='Mapbox' className='filter dark:invert' />
			case 'mysql': 		return <Image src='/icons/mysql.png' width={size*1.5} height={size} alt='MySQL' title='MySQL' className='filter grayscale brightness-0 dark:brightness-150' />
			case 'nextjs': 		return <Image src='/icons/next-js.svg' width={size} height={size} alt='NX' title='Next.js' className='filter dark:invert' />
			case 'powershell': 	return <Image src='/icons/powershell.svg' width={size} height={size} alt='PS' title='PowerShell' className='filter dark:invert'/>
			case 'react': 		return <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React' />
			case 'reactnative': return <FontAwesomeIcon icon={['fab', 'react']} width={size} height={size} title='React Native' />
			case 'spotify': 	return <FontAwesomeIcon icon={['fab', 'spotify']} width={size} height={size} title='Spotify API' />
			case 'tailwind': 	return <Image src='/icons/tailwind.svg' width={size} height={size} alt='TW' title='Tailwind CSS' className='filter dark:invert' />
			case 'ts': 			return <Image src='/icons/ts.svg' width={size} height={size} alt='TS' title='TypeScript' className='filter dark:invert' />
			case 'vercel': 		return <Image src='/icons/vercel.svg' width={size} height={size} alt='VC' title='Vercel' className='filter dark:invert' />
			default: 			return <span/>
		}
	}

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

export default ProjectEmbed
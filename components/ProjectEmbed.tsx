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
            case 'baseweb': return <Image src='/icons/baseweb.svg' width={size} height={size} alt='BW' title='Baseweb UI' className='filter dark:invert' />
            case 'bootstrap': return <FontAwesomeIcon icon={['fab', 'bootstrap']} title='Bootstrap' className='w-10'/>
            case 'github': return <a className='w-full text-gray-800 dark:text-gray-200' href={githubURL} title='GitHub ↗'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            case 'golang': return <Image src='/icons/golang.png' width={size*0.9} height={size} alt='GO' title='Golang' className='filter grayscale' />
            case 'googlecloud': return <Image src='/icons/google-cloud.svg' width={size*1.3} height={size} alt='GC' title='Google Cloud' className=' filter grayscale dark:invert-0 invert' />
            case 'js': return <FontAwesomeIcon icon={['fab', 'js']} title='JavaScript' />
            case 'mapbox': return <Image src='/icons/mapbox.svg' width={size} height={size} alt='MB' title='Mapbox' className='filter dark:invert' />
            case 'mysql': return <FontAwesomeIcon icon='database' title='MySQL' />
            case 'nextjs': return <Image src='/icons/next-js.svg' width={size} height={size} alt='NX' title='Next.js' className='filter dark:invert' />
            case 'powershell': return <Image src='/icons/powershell.svg' width={size} height={size} alt='PS' title='PowerShell' className='filter dark:invert'/>
            case 'react': return <FontAwesomeIcon icon={['fab', 'react']} title='React' />
            case 'reactnative': return <FontAwesomeIcon icon={['fab', 'react']} title='React Native' />
            case 'spotify': return <FontAwesomeIcon icon={['fab', 'spotify']} title='Spotify API' />
            case 'tailwind': return <Image src='/icons/tailwind.svg' width={size} height={size} alt='TW' title='Tailwind CSS' className='filter dark:invert' />
            case 'ts': return <Image src='/icons/ts.svg' width={size} height={size} alt='TS' title='TypeScript' className='filter dark:invert' />
            case 'vercel': return <Image src='/icons/vercel.svg' width={size} height={size} alt='VC' title='Vercel' className='filter dark:invert' />
            default: return <span/>
        }
    }

    return(
        <div className='flex flex-col w-full p-4 border border-gray-200 rounded dark:border-gray-800'>
            <div>
                <a href={url} title={title + ' ↗'} className='p-0 title link'>{title}</a>
            </div>
            <div className='mb-6 text-lg font-light tracking-wide text-gray-500'>
                {desc}
            </div>
            <div className='flex flex-row align-bottom gap-x-3'>
                {tagIDs.map((tag, key) => 
                    <span key={key} className='flex text-gray-800 align-bottom dark:text-gray-200' style={{ 'minWidth': size, 'maxHeight': size }}>{Tag(tag)}</span>
                )}
            </div>
        </div>
    )
}

export default ProjectEmbed
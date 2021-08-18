import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Sidebar(): JSX.Element {

    function Sidelink(sl: { href: string, color: string, height: number, children: JSX.Element }): JSX.Element {
        return(
                <div className='flex transform -rotate-90'>
                    <Link href={sl.href}>
                        <a className='flex self-end px-8 py-2'>
                            <span className={`text-3xl font-semibold tracking-wider text-gray-400 uppercase transition-colors duration-500 text-opacity-90 hover:text-opacity-100 hover:text-${sl.color}-400`}>{sl.children}</span>
                        </a>
                    </Link>
                </div>
        )
    }

    return(
        <div className='top-0 z-50 hidden py-2 transition-colors duration-500 md:bg-opacity-0 md:flex md:sticky md:h-screen md:w-16 md:bg-gray-800 hover:bg-opacity-80'>
            <div className='flex flex-col justify-between w-full h-full align-top'>
                <Link href=''>
                    <a className='flex self-center'>
                        <Image src='/jhdot.svg' width={48} height={48} alt='jh.'/>
                    </a>
                </Link>
                <Sidelink href='/about' color='teal' height={177.97}>
                    <span>About</span>
                </Sidelink>
                <Sidelink href='/blog' color='sky' height={151.73}>
                    <span>Blog</span>
                </Sidelink>
                <Sidelink href='/projects' color='indigo' height={234.67}>
                    <span>Projects</span>
                </Sidelink>
                <Sidelink href='/resume' color='violet' height={197.63}>
                    <span>Resume</span>
                </Sidelink>
            </div>
        </div>
    )
}

export default Sidebar
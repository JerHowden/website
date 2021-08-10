import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Sidebar(): JSX.Element {

    function Sidelink(sl: { href: string, children: JSX.Element }): JSX.Element {
        return(
                <Link href={sl.href}>
                    <a className='flex self-center w-full'>
                        {sl.children}
                    </a>
                </Link>
        )
    }

    return(
        <div className='top-0 hidden md:flex md:sticky md:h-screen md:w-48 md:bg-gray-800'>
            <div className='flex flex-col w-full h-full align-middle'>
                <Sidelink href=''>
                    <Image src='/jhdot.svg' width={40} height={40} alt='jh.'/>
                </Sidelink>
                <Sidelink href='/about'>
                    <span>About</span>
                </Sidelink>
                <Sidelink href='/blog'>
                    <span>Blog</span>
                </Sidelink>
                <Sidelink href='/projects'>
                    <span>Projects</span>
                </Sidelink>
                <Sidelink href='/resume'>
                    <span>Resume</span>
                </Sidelink>
            </div>
        </div>
    )
}

export default Sidebar
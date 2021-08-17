import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer(): JSX.Element {


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
            <div className='flex flex-row justify-between h-auto mt-6'>
                <div className='flex flex-col justify-between'>
                    <div>
                        <div className='text-sm lg:text-xl ml-0.5'>jeremiah howden</div>
                        <div className='-mt-1 text-xs text-gray-300 lg:text-base'>software developer</div>
                    </div>
                    <div className='flex self-end text-gray-500'>Copyright © 2021 Jeremiah Howden</div>
                </div>
                <div className='flex flex-col text-right'>
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
                            <span className='hidden sm:inline'>dev</span>
                            {' '}
                            <span>blog</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
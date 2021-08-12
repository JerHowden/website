import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

function Header(): JSX.Element {

    function ConnectIcon(ci: { icon: IconProp, title?: string, link: string }): JSX.Element {
        return(
                <a href={ci.link} title={ci.title} className='w-6 h-6 hover:text-teal-600'>
                    <FontAwesomeIcon icon={ci.icon} />
                </a>
        )
    }

    return(
        <div className='flex flex-row justify-between p-1.5 border-b self-center border-gray-900'>
                <Link href=''>
                    <a title='jeremiahhowden.com'>
                        <div className='flex p-1 font-sans text-xl font-normal tracking-wider'>
                            jeremiahhowden
                        </div>
                    </a>
                </Link>
                <div className='flex flex-row justify-between h-full p-1 mt-0.5 w-36 invisible sm:visible'>
                    <ConnectIcon icon={['fab', 'github']} title='github' link='https://www.github.com/JerHowden' />
                    <ConnectIcon icon={['fab', 'linkedin-in']} title='linkedin' link='https://www.linkedin.com/in/jeremiah-howden/' />
                    <ConnectIcon icon={['fab', 'twitter']} title='twitter' link='https://www.twitter.com/jeremiah_howden/' />
                    <ConnectIcon icon={['fab', 'dev']} title='dev.to' link='https://dev.to/jerhowden' />
                </div>
        </div>
    )
}

export default Header
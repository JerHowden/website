import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

function Header(): JSX.Element {

    function ConnectIcon(ci: { icon: IconProp, title?: string, link: string }): JSX.Element {
        return(
                <a href={ci.link} title={ci.title} className='w-6 h-6 transition-colors duration-50 hover:text-teal-900'>
                    <FontAwesomeIcon icon={ci.icon} />
                </a>
        )
    }

    return(
        <div className='flex flex-row justify-between p-1.5 self-center'>
                <Link href=''>
                    <a title='jeremiahhowden.com' className='text-xl link'>
                        jeremiahhowden
                    </a>
                </Link>
                <div className='flex flex-row justify-between invisible h-full p-1 w-36 sm:visible'>
                    <a href='https://www.github.com/JerHowden' className='link group'>
                            <span>g</span>
                            <span className='hidden group-hover:inline'>it</span>
                            <span>h</span>
                            <span className='hidden group-hover:inline'>ub</span>
                    </a>
                    <a href='https://www.linkedin.com/in/jeremiah-howden' className='link group'>
                            <span className='hidden group-hover:inline'>linked</span>
                            <span>in</span>
                    </a>
                    <a href='https://www.twitter.com/jeremiah_howden' className='link group'>
                        <span>tw</span>
                        <span className='hidden group-hover:inline'>itter</span>
                    </a>
                    <a href='https://dev.to/jerhowden' className='link group'>
                        <span>d</span>
                        <span className='hidden group-hover:inline'>e</span>
                        <span>v</span>
                        <span className='hidden group-hover:inline'>.to</span>
                    </a>
                    {/* <ConnectIcon icon={['fab', 'github']} title='github' link='https://www.github.com/JerHowden' />
                    <ConnectIcon icon={['fab', 'linkedin-in']} title='linkedin' link='https://www.linkedin.com/in/jeremiah-howden/' />
                    <ConnectIcon icon={['fab', 'twitter']} title='twitter' link='https://www.twitter.com/jeremiah_howden/' />
                    <ConnectIcon icon={['fab', 'dev']} title='dev.to' link='https://dev.to/jerhowden' /> */}
                </div>
        </div>
    )
}

export default Header
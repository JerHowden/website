import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

// pokemon go navigation

function MobileNav(): JSX.Element {

    const [open, setOpen] = useState(false)

    function Button(btn: { href: string, icon: IconProp }): JSX.Element {
        return(
            <Link href={btn.href}>
                <a>
                    <div>
                        <FontAwesomeIcon icon={btn.icon} />
                    </div>
                </a>
            </Link>
        )
    }

    return(
        <div className='fixed z-50 w-10 h-10 bg-red-700 rounded-md left-1/2 mobile-nav md:hidden bottom-1/2'>
            {/* <div className='text-white' onClick={() => setOpen(prevOpen => !prevOpen)}>
                <FontAwesomeIcon icon='bars'/>
            </div> */}
            <div><Button href='/about' icon='address-card'/></div>
            <div><Button href='/blog' icon='blog'/></div>
            <div><Button href='' icon='home'/></div>
            <div><Button href='/projects' icon='project-diagram'/></div>
            <div><Button href='/resume' icon='file-alt'/></div>
        </div>
    )
}

export default MobileNav
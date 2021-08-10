import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'

// pokemon go navigation

function MobileNav(): JSX.Element {

    const [open, setOpen] = useState(false)

    return(
        <div className='fixed left-auto z-50 w-10 h-10 bg-red-700 rounded-md mobile-nav md:hidden bottom-10'>
            <div className='text-white' onClick={() => setOpen(true)}>
                <span>
                    
                </span>
            </div>
            { open ?
                <div>

                </div>
            :
                <div/>
            }
        </div>
    )
}

export default MobileNav
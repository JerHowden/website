import React from 'react'

function Card(props: {children?: JSX.Element}): JSX.Element {


    return(
        <div className='w-3/4 h-32 lg:w-1/2'>
            <div className='w-full h-full p-4 bg-gray-300 rounded mix-blend-hard-light'>
                {props.children}
            </div>
        </div>
    )
}

export default Card
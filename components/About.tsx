import React from 'react'

function About(): JSX.Element {


    return(
        <div className='flex flex-col items-baseline w-full max-w-5xl px-12 py-3 bg-black bg-opacity-25 justify-items-center'>
            <h1 className='flex w-full text-lg font-bold text-teal-200 mix-blend-luminosity'>
                about
            </h1>
            <div className='flex w-full'>
                <p>
                    hi, i&apos;m jeremiah, a software developer specializing in fast, accessible, user-driven sites. 
                    <br/>
                    i enjoy using typescript, nextjs, and tailwindcss to build my projects.
                    <br/>
                    i&apos;ve been developing in react for over 3 years and graduated with a b.s. in computer science in 2020.
                </p>
            </div>
        </div>
    )
}

export default About
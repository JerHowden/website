import React from 'react'

function About(): JSX.Element {

    function helperLink(href: string, content: string): JSX.Element {
        return <a href={href} title={content + ' ↗'} className='p-0 link'>{content}</a>
    }

    return(
        <div className='w-full max-w-3xl '>
            <div className='flex flex-col items-baseline w-full p-4 justify-items-center'>
                <h1 className='heading'>
                    Hey, I&apos;m Jeremiah
                </h1>
                <p className='paragraph'>
                    I make responsive sites with {helperLink('https://reactjs.org/', 'React')}. 
                    I&apos;ve been developing in React for over three years and am currently
                    using {helperLink('https://www.typescriptlang.org/', 'TypeScript')}, {helperLink('https://nextjs.org/', 'Next.js')}, and {helperLink('https://tailwindcss.com/', 'Tailwind CSS')} to build my projects.
                </p>
                <p className='paragraph'>
                    I currently work at {helperLink('https://www.novacoast.com/', 'Novacoast')} as a Software Developer, 
                    and I received my bachelor&apos;s degree in Computer Science from {helperLink('https://www.ttu.edu/', 'Texas Tech University')} last year.
                </p>
            </div>
        </div>
    )
}

export default About
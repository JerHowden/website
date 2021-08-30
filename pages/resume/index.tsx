import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Resume(): JSX.Element {
    
    return(
        <div className='w-full h-full max-w-3xl p-4'>

            <Head>
				<title>{'Jeremiah\'s Resume'}</title>
				<meta name='description' content={'Jeremiah Howden\'s résumé'}/>
				<link rel='icon' href='/jhdot.svg'/>
				{/* <link rel='apple-touch-icon' href='/jhdot.svg'/> // add this when safari accepts svg icons */}
				<link rel='apple-touch-icon' href='/jhdot-white.png' media='(prefers-color-scheme:no-preference)'/>
				<link rel='apple-touch-icon' href='/jhdot-dark.png' media='(prefers-color-scheme:light)'/>
				<link rel='apple-touch-icon' href='/jhdot-white.png' media='(prefers-color-scheme:dark)'/>
			</Head>

            <Link href='/resume.pdf'>
                <a className='w-full h-full' title='Download ↓'>
                <div className='flex flex-col px-4 py-12 border border-black 2xl:px-8 2xl:py-16 dark:border-white gap-y-8 md:gap-y-6 hover:bg-black dark:hover:bg-white backdrop-filter backdrop-blur dark:hover:bg-opacity-10 hover:bg-opacity-10 backdrop-saturate-200'>
                    <div>
                        <h1 className='text-4xl font-bold text-black dark:text-white'>Jeremiah Howden</h1>
                        <div className='flex flex-col text-sm text-gray-600 md:flex-row gap-x-2 dark:text-gray-400'>
                            <span className='line-through '>phonenumber</span> 
                            <span className='hidden md:inline'>●</span>
                            <span>jeremiahhowden.com</span>
                            <span className='hidden md:inline'>●</span>
                            <span>jeremiah@jeremiahhowden.com</span>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-black dark:text-white'>EXPERIENCE</h2>
                        <hr className='mb-2 border-black dark:border-white' />
                        <div className='flex flex-col gap-y-2 md:gap-y-1'>
                            <div className='flex flex-col justify-between w-full text-gray-700 md:flex-row dark:text-gray-300'>
                                <span>Novacoast, Inc. – Santa Barbara, CA / Remote</span>
                                <span className='text-sm md:text-base'>2017 - Present</span>
                            </div>
                            <div>
                                <div className='-mb-1 text-lg font-semibold'>Software Developer</div>
                                <ul className='ml-4 text-sm text-gray-800 list-disc dark:text-gray-200'>
                                    <li>Developed and led full-stack web applications for internal processes leveraging technologies including React, Golang, PHP, MySQL, and Docker.</li>
                                    <li>Orchestrated and engaged in agile scrum development on multiple projects with team members.</li>
                                    <li>Gathered comprehensive user requirements for understanding design and functionality implications.</li>
                                    <li>Wrote unit tests and documentation for bug fixes and updates.</li>
                                </ul>
                            </div>
                            <div className='ml-0 md:ml-4'>
                                <div className='-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200'>Portfolio</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li>Developed a fully deployed and Lighthouse 95+% portfolio site with Next.js, TypeScript, Tailwind CSS, and Vercel.</li>
                                    <li>Connected to the community with a tutorial blog post walking through how to pull live Spotify data.</li>
                                </ul>
                            </div>
                            <div className='ml-0 md:ml-4'>
                                <div className='-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200'>TackleBox</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li>Internal application built on React and Flask that monitors client domains for phishing attacks.</li>
                                    <li>Produced front-end MVP, mentored UCSB capstone team in React to continue with risk analysis.</li>
                                </ul>
                            </div>
                            <div className='ml-0 md:ml-4'>
                                <div className='-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200'>Invoice System</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li>Enterprise-level application used by all Novacoast departments for tracking billing and invoicing clients leveraging React, Golang, and MySQL.</li>
                                    <li>Lead developer responsible for all stages of development and deployment.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-black dark:text-white'>EDUCATION</h2>
                        <hr className='mb-2 border-black dark:border-white' />
                        <div className='flex flex-col gap-y-2 md:gap-y-1'>
                            <div className='flex flex-col justify-between w-full text-gray-700 md:flex-row dark:text-gray-300'>
                                <span>Texas Tech University – Lubbock, TX</span>
                                <span className='text-sm md:text-base'>2017 - 2020</span>
                            </div>
                            <div>
                                <div className='-mb-1 text-lg font-semibold'>B.S. Computer Science, Minor in Mathematics</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li><span className='italic'>Senior Engineer</span>, Association for Computing Machinery</li>
                                    <li><span className='italic'>Honor List</span>, Fall 2019, Spring 2020, Fall 2020</li>
                                </ul>
                            </div>
                            <div className='ml-0 md:ml-4'>
                                <div className='-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200'>Athena Mobile Application</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li>University capstone project using React Native, Expo, and Firebase in a team of five with full software design specification.</li>
                                    <li>Led front-end team through React Native and design principles.</li>
                                </ul>
                            </div>
                            <div className='ml-0 md:ml-4'>
                                <div className='-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200'>Texas Tech Freshman Guide</div>
                                <ul className='ml-4 text-sm text-gray-700 list-disc dark:text-gray-300'>
                                    <li>Final project for an HCI course using React and Mapbox, deployed with GitHub Pages.</li>
                                    <li>Created a custom interactive map of the TTU campus to help students find their dorms, classes, and restaurants.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-black dark:text-white'>SKILLS</h2>
                        <hr className='mb-2 border-black dark:border-white' />
                        <ul className='flex flex-col text-sm text-gray-700 dark:text-gray-300 gap-y-2 md:gap-y-0.5'>
                            <li>
                                <span className='text-base font-semibold text-gray-800 dark:text-gray-200'>Technologies:</span> React, Next.js, Tailwind CSS, React Native, Sass, MySQL
                            </li>
                            <li>
                                <span className='text-base font-semibold text-gray-800 dark:text-gray-200'>Programming Languages:</span> TypeScript, HTML / CSS / JavaScript, SQL, Python, Java, PHP, Golang
                            </li>
                            <li>
                                <span className='text-base font-semibold text-gray-800 dark:text-gray-200'>DevOps:</span> Git, Docker, Agile Development
                            </li>
                        </ul>
                    </div>
                </div>
                </a>
            </Link>
        </div>
    )
}

export default Resume
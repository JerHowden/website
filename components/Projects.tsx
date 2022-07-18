import React from 'react'
import ProjectEmbed from './ProjectEmbed'

function Projects(): JSX.Element {

    return(
        <div className='w-full max-w-3xl '>
            <div className='flex flex-col items-baseline w-full p-4 justify-items-center'>
                <h1 className='subheading'>
                    Projects
                </h1>
                <div className='grid w-full grid-cols-1 gap-4'>
                    <ProjectEmbed
                        title='iPowerLift'
                        tagIDs={['React', 'TypeScript', 'Redux', 'Material UI']}
                        year='EOG Resources — 2021-Present'
                        desc='Internal EOG application for field engineers to track oil wells. 
                              Multitude of application requirements including data visualization, gas lift optimization, plunger tracking, setpoint changes, etc.
                              Currently leading mobile development and user experience.'
                    />
                    <ProjectEmbed
                        title='jeremiahhowden.com'
                        tagIDs={['GitHub', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Spotify API', 'Vercel']}
                        repoURL='https://github.com/JerHowden/website'
                        year='Personal — 2021'
                        desc='Right here, this is my personal site. 
                              You&apos;ll find a blend of my personal and professional lives here with my blog, portfolio, and collection of links.
                              Constantly evolving to include new ideas and designs.'
                    />
                    <ProjectEmbed
                        title='AD Discovery & Remediation'
                        tagIDs={['GitHub', 'PowerShell']}
                        repoURL='https://github.com/JerHowden/active-directory'
                        year='Novacoast — 2021'
                        desc='Novacoast project for a client categorizing users and groups in Active Directory into active, questionable, and inactive. 
                              Heavy usage of PowerShell and Excel.'
                    />
                    <ProjectEmbed
                        title='TackleBox'
                        url='/tacklebox.pdf'
                        tagIDs={['Repository', 'React', 'JavaScript', 'Baseweb']}
                        repoURL='https://capstone.cs.ucsb.edu/past21.html#team8'
                        year='Novacoast — 2020-2021'
                        desc={<p>
                            Novacoast application transitioned into a UCSB capstone project.
                            Provides a user interface and cron job for discovering phishing sites for clients and analyzing the threat level.
                            Led the front-end team and built with <a className='p-0 link' href='https://github.com/ChristopherGarsia'>Chris</a> and <a className='p-0 link' href='https://github.com/eric-guerrero'>Eric</a>.
                        </p>}
                    />
                    <ProjectEmbed
                        title='Athena'
                        tagIDs={['GitHub', 'React Native', 'JavaScript', 'Google Cloud', 'Figma']}
                        repoURL='https://github.com/Athena-Capstone-2020/athena-mobile-app'
                        year='University — 2020'
                        desc={<p>
                            Capstone Project to track food expiration and meal planning. 
                            Created with the purpose of minimizing food waste and creating recipes from a user&apos;s pantry as a remedy. 
                            Built with 
                                {' '}<a className='p-0 link' href='https://github.com/Eliascm17'>Elias</a>,{' '}
                                <a className='p-0 link' href='https://github.com/BlaineSieck'>Blaine</a>,{' '}
                                <a className='p-0 link' href='https://github.com/rgoonie'>Rajeev</a>,{' '}
                                and <a className='p-0 link' href='https://github.com/ynigoreyes'>Miggy</a>.
                        </p>}
                    />
                    <ProjectEmbed
                        title='TTU Freshman Guide'
                        url='https://jerhowden.github.io/TexasTechFreshmanGuide/'
                        tagIDs={['GitHub', 'React', 'JavaScript', 'Mapbox']}
                        repoURL='https://github.com/JerHowden/TexasTechFreshmanGuide'
                        year='University — 2019'
                        desc={<p>This website was the final project for a Human-Computer Interaction class. It features an interactive map with clickable buildings and searchable locations by name, code, and tags. Built with <a href='https://twitter.com/Eliascm17' className='p-0 link'>Elias</a>.</p>}
                    />
                    <ProjectEmbed
                        title='Invoice v2'
                        tagIDs={['React', 'JavaScript', 'Bootstrap', 'Golang', 'MySQL']}
                        year='Novacoast — 2018-2020'
                        desc='A comprehensive billing application meant for connecting different business units. The project featured billing time management, accounting approval, and managerial oversight. I learned React on this and rebuilt the site twice as I learned more efficient methods.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
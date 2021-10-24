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
                        title='jeremiahhowden.com'
                        url='https://github.com/JerHowden/website'
                        tagIDs={['GitHub', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Spotify API', 'Vercel']}
                        githubURL='https://github.com/JerHowden/website'
                        year='Personal — 2021'
                        desc=''
                    />
                    <ProjectEmbed
                        title='AD Discovery & Remediation'
                        url='https://github.com/JerHowden/active-directory'
                        tagIDs={['GitHub', 'PowerShell']}
                        githubURL='https://github.com/JerHowden/active-directory'
                        year='Novacoast — 2021'
                        desc=''
                    />
                    <ProjectEmbed
                        title='TackleBox'
                        url='https://jeremiahhowden.com/tacklebox.pdf'
                        tagIDs={['GitHub', 'React', 'JavaScript', 'Baseweb']}
                        githubURL='https://capstone.cs.ucsb.edu/past21.html#team8'
                        year='Novacoast — 2020-2021'
                        desc=''
                    />
                    <ProjectEmbed
                        title='Athena'
                        url='https://github.com/Athena-Capstone-2020/athena-mobile-app'
                        tagIDs={['GitHub', 'React Native', 'JavaScript', 'Google Cloud', 'Figma']}
                        githubURL='https://github.com/Athena-Capstone-2020/athena-mobile-app'
                        year='University — 2020'
                        desc=''
                    />
                    <ProjectEmbed
                        title='TTU Freshman Guide'
                        url='https://jerhowden.github.io/TexasTechFreshmanGuide/'
                        tagIDs={['GitHub', 'React', 'JavaScript', 'Mapbox']}
                        githubURL='https://github.com/JerHowden/TexasTechFreshmanGuide'
                        year='University — 2019'
                        desc='This website was the final project for a Human-Computer Interaction class. It features an interactive map with clickable buildings and searchable locations by name, code, and tags.'
                    />
                    <ProjectEmbed
                        title='Invoice v2'
                        url='https://jeremiahhowden.com#unfortunately-thats-proprietary'
                        tagIDs={['React', 'JavaScript', 'Bootstrap', 'Golang', 'MySQL']}
                        year='Novacoast — 2018-2020'
                        desc=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
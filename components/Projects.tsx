import React from 'react'
import ProjectEmbed from './ProjectEmbed'

function Projects(): JSX.Element {

    return(
        <div className='w-full max-w-3xl '>
            <div className='flex flex-col items-baseline w-full p-4 justify-items-center'>
                <h1 className='subheading'>
                    Projects
                </h1>
                <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
                    <ProjectEmbed
                        title='jeremiahhowden.com'
                        url='https://jeremiahhowden.com#you-were-already-here-lol'
                        tagIDs={['github', 'react', 'ts', 'nextjs', 'tailwind', 'spotify', 'vercel']}
                        githubURL='https://github.com/JerHowden/website'
                        desc='Personal — 2021'
                    />
                    <ProjectEmbed
                        title='AD Discovery & Remediation'
                        url='https://github.com/JerHowden/active-directory'
                        tagIDs={['github', 'powershell']}
                        githubURL='https://github.com/JerHowden/active-directory'
                        desc='Novacoast — 2021'
                    />
                    <ProjectEmbed
                        title='TackleBox'
                        url='https://jeremiahhowden.com#unfortunately-thats-proprietary'
                        tagIDs={['github', 'react', 'js', 'baseweb']}
                        githubURL='https://github.com/bredmond5/dns-twist-react'
                        desc='Novacoast — 2020-2021'
                    />
                    <ProjectEmbed
                        title='Athena'
                        url='https://github.com/Athena-Capstone-2020/athena-mobile-app'
                        tagIDs={['github', 'reactnative', 'js', 'googlecloud']}
                        githubURL='https://github.com/Athena-Capstone-2020/athena-mobile-app'
                        desc='University — 2020'
                    />
                    <ProjectEmbed
                        title='TTU Freshman Guide'
                        url='https://jerhowden.github.io/TexasTechFreshmanGuide/'
                        tagIDs={['github', 'react', 'js', 'mapbox']}
                        githubURL='https://github.com/JerHowden/TexasTechFreshmanGuide'
                        desc='University — 2019'
                    />
                    <ProjectEmbed
                        title='Invoice v2'
                        url='https://jeremiahhowden.com#unfortunately-thats-proprietary'
                        tagIDs={['react', 'js', 'bootstrap', 'golang', 'mysql']}
                        desc='Novacoast — 2018-2020'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
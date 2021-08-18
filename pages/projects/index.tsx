import React, { useState } from 'react'
import ProjectEmbed from '../../components/ProjectEmbed'

function Projects(): JSX.Element {

    const selected = useState('')

    return(
        <div className='page projects'>
            <ProjectEmbed 
                url='https://jerhowden.github.io/TexasTechFreshmanGuide/'
                title='TTU Freshman Guide'
                tags={['react', 'mapbox', 'material-ui']}
            >
                <p className='text-gray-700 text-base'>
                    <a className='text-gray-700 underline' href='https://eliasm.dev' title='Elias Moreno'>Elias</a> and I created this as a final project for our Human Computer Interaction class. 
                    It features a handmade interactive map of campus, a school calendar, and other resources.
                </p>
            </ProjectEmbed>
            <ProjectEmbed 
                url='https://www.github.com/JerHowden'
                title='Google'
                tags={['google', 'sample', 'test']}
            >
                <p className='text-gray-700 text-base'>
                    Sample description.
                </p>
            </ProjectEmbed>
        </div>
    )
}

export default Projects
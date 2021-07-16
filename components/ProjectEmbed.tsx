import React from 'react'

interface PropTypes {
    url: string
}

function ProjectEmbed(props: PropTypes): JSX.Element {
    return(
        <div className='project-embed'>
            <a href={props.url}></a>
            <iframe
                src={props.url}
            />
        </div>
    )
}

export default ProjectEmbed
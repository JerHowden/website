import React from 'react'

interface PropTypes {
    url: string,
    title: string,
    tags: string[],
    children: React.ReactChild
}

function ProjectEmbed(props: PropTypes): JSX.Element {

    return(
        <div className='project-embed container max-w-sm rounded overflow-hidden shadow-lg lg:max-w-full lg:flex'>
            <iframe
                title={props.title}
                className='min-w-full'
                src={props.url}
            />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{props.title}</div>
                {props.children}
            </div>
            <div className='px-6 pt-4 pb-2'>
                {props.tags.map(tag => {
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                        {tag}
                    </span>
                })}
            </div>
        </div>
    )
}

export default ProjectEmbed
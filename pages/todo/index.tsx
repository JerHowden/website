import React from 'react' 

function Todo(): JSX.Element {

    return (
        <div className='flex flex-col p-8 border gap-y-8'>
            <h1 className='text-4xl italic font-extrabold'>{'// TODO:'}</h1>
            <ul className='flex flex-col ml-4 text-2xl list-disc gap-y-6'>
                <li>Modal for Contact Me in Footer</li>
                <li>Update Resume for resume.pdf</li>
                <li>Write blog post about Spotify api</li>
                <li>Blog wrapper on /blog</li>
            </ul>
        </div>
    )
}

export default Todo
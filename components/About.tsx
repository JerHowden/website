import React from 'react'

function About(): JSX.Element {
  function helperLink(href: string, content: string): JSX.Element {
    return (
      <a
        href={href}
        title={content + ' ↗'}
        className="p-0 link"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex w-full max-w-3xl md:my-48 ">
      <div className="flex flex-col items-baseline w-full p-4 justify-items-center">
        <h1 className="heading">Hey, I&apos;m Jeremiah</h1>
        <p className="paragraph">
          I am a React Developer at {helperLink('https://www.eogresources.com/', 'EOG Resources')}{' '}
          and I received my bachelor&apos;s degree in Computer Science from{' '}
          {helperLink('https://www.ttu.edu/', 'Texas Tech University')} in 2020.
        </p>
        <p className="paragraph">
          I&apos;ve been developing in React for over four years and like using{' '}
          {helperLink('https://www.typescriptlang.org/', 'TypeScript')},{' '}
          {helperLink('https://nextjs.org/', 'Next.js')}, and{' '}
          {helperLink('https://tailwindcss.com/', 'Tailwind CSS')} to build my projects.
        </p>
      </div>
    </div>
  )
}

export default About

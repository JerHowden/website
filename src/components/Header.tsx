import React from 'react'
import Link from 'next/link'

function Header(): JSX.Element {
  return (
    <div className="sticky top-0 z-20 flex self-start justify-around w-full bg-white dark:bg-black backdrop-filter backdrop-blur dark:bg-opacity-60 bg-opacity-60 backdrop-saturate-200">
      <div className="flex flex-row justify-between w-full max-w-3xl p-4 bg-transparent">
        <Link
          href="/"
          title="jeremiahhowden.com"
          className="h-full mt-1 text-xl font-semibold link"
        >
          jeremiahhowden
        </Link>
        <div className="flex flex-row justify-between invisible h-full p-1 text-xl w-96 md:visible">
          <div
            className="flex-1"
            title="dev blog ↗"
          >
            <a
              href="https://dev.to/jerhowden"
              className="flex-1 font-semibold link group hover:tracking-tighter"
              aria-label="dev.to"
            >
              <span>d</span>
              <span className="hidden group-hover:inline">e</span>
              <span>v</span>
              <span className="hidden group-hover:inline">.to</span>
            </a>
          </div>
          <div
            className="flex-1 "
            title="github ↗"
          >
            <a
              href="https://www.github.com/JerHowden"
              className="font-semibold link group hover:tracking-tighter"
              aria-label="github"
            >
              <span>g</span>
              <span className="hidden group-hover:inline">it</span>
              <span>h</span>
              <span className="hidden group-hover:inline">ub</span>
            </a>
          </div>
          <div
            className="flex-1"
            title="linkedin ↗"
          >
            <a
              href="https://www.linkedin.com/in/jeremiah-howden"
              className="flex-1 font-semibold link group hover:tracking-tighter"
              aria-label="linked in"
            >
              <span className="hidden group-hover:inline">linked</span>
              <span>in</span>
            </a>
          </div>
          <div
            className="flex-1"
            title="twitter ↗"
          >
            <a
              href="https://www.twitter.com/jeremiah_howden"
              className="flex-1 font-semibold link group hover:tracking-tighter"
              aria-label="twitter"
            >
              <span>tw</span>
              <span className="hidden group-hover:inline">itter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

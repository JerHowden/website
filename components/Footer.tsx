import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Spotify } from './Spotify'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-3xl p-4">
      {/* TODO : Modal popout for contact */}
      <a
        href="mailto:jeremiah@jeremiahhowden.com"
        title="contact me"
        className="w-full text-center"
      >
        <div className="relative w-full h-12 sm:h-16 md:my-3">
          <Image
            src="/email-footer.svg"
            alt="jeremiah@jeremiahhowden.com"
            fill
            className="dark:invert"
            quality={100}
          />
        </div>
      </a>
      <hr />
      <div className="flex flex-col justify-between h-auto mt-6 sm:flex-row gap-y-6">
        <div className="flex flex-col justify-between order-last gap-y-6 sm:order-first">
          <div>
            <div className="text-sm lg:text-xl ml-0.5 text-gray-800 dark:text-gray-200">
              Jeremiah Howden
            </div>
            <div className="-mt-1 text-xs text-gray-700 dark:text-gray-300 lg:text-base">
              Software Developer
            </div>
          </div>
          <Spotify />
          <div className="flex text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jeremiah Howden
          </div>
        </div>
        <div className="flex flex-col gap-y-0.5 text-left sm:text-right">
          <div className="">
            <Link
              href="/resume"
              title="résumé"
              className="p-0.5 lg:text-lg link"
            >
              resume
            </Link>
          </div>
          <div className="">
            <a
              href="https://www.github.com/JerHowden"
              title="github ↗"
              className="p-0.5 lg:text-lg link"
            >
              github
            </a>
          </div>
          <div className="">
            <a
              href="https://www.linkedin.com/in/jeremiah-howden"
              title="linkedin ↗"
              className="p-0.5 lg:text-lg link"
            >
              linkedin
            </a>
          </div>
          <div className="">
            <a
              href="https://www.twitter.com/jeremiah_howden"
              title="twitter ↗"
              className="p-0.5 lg:text-lg link"
            >
              twitter
            </a>
          </div>
          <div className="">
            <a
              href="https://dev.to/jerhowden"
              title="dev blog ↗"
              className="p-0.5 lg:text-lg link"
            >
              dev blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

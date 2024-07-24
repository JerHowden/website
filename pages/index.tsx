import Head from 'next/head'

import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col bg">
      <Head>
        <title>{'Jeremiah Howden'}</title>
        <meta
          name="description"
          content="This is my website, built with next.js, typescript, and tailwind, deployed with vercel. Take a look around!"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="Jeremiah Howden"
        />
        <meta
          property="og:description"
          content={"Jeremiah Howden's portfolio site."}
        />
        <meta
          property="og:site_name"
          content="Jeremiah Howden"
        />
        <meta
          property="twitter:card"
          content="summary"
        />
        <meta
          property="twitter:creator"
          content="@jeremiah_howden"
        />
        <meta
          property="twitter:title"
          content="Jeremiah Howden"
        />
        <meta
          property="twitter:description"
          content={"Jeremiah Howden's portfolio site."}
        />
        <link
          rel="icon"
          href="/jhdot.svg"
        />
        {/* <link rel='apple-touch-icon' href='/jhdot.svg'/> // add this when safari accepts svg icons */}
        <link
          rel="apple-touch-icon"
          href="/jhdot-white.png"
          media="(prefers-color-scheme:no-preference)"
        />
        <link
          rel="apple-touch-icon"
          href="/jhdot-dark.png"
          media="(prefers-color-scheme:light)"
        />
        <link
          rel="apple-touch-icon"
          href="/jhdot-white.png"
          media="(prefers-color-scheme:dark)"
        />
      </Head>

      <main className="">
        <div className="flex flex-col items-center gap-y-4">
          <About />
          <Projects />
        </div>
      </main>
    </div>
  )
}

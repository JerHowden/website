import Head from 'next/head'
import type { Metadata } from 'next'

import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Jeremiah Howden',
  description: 'Homepage',
}

export default function Home() {
  return (
    <div className="flex flex-col bg">
      <main className="">
        <div className="flex flex-col items-center gap-y-4">
          <About />
          <Projects />
        </div>
      </main>
    </div>
  )
}

import type { Metadata } from 'next'

import Projects from '@/components/Projects'
import About from '@/components/About'

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

import type { Metadata } from 'next'

import Projects from '@/components/_legacy/Projects'
import About from '@/components/_legacy/About'
import Container from '@mui/material-pigment-css/Container'
import { Spotify } from '@/components'

export const metadata: Metadata = {
  title: 'Jeremiah Howden',
  description: 'Homepage',
}

export default function Home() {
  return (
    <div /* maxWidth="md" */>
      <Spotify />
    </div>
  )
}

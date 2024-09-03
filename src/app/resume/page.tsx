import Container from '@mui/material-pigment-css/Container'
import { Metadata } from 'next'
import { Resume } from './Resume'

export const metadata: Metadata = {
  title: "Jeremiah's Resume",
  description: "Jeremiah Howden's Resume",
}

export default function ResumePage() {
  return (
    <Container maxWidth="md">
      <Resume />
    </Container>
  )
}

import { Box, Stack } from '@mui/material'
import { Logo } from './Logo'
import { Spotify } from '../Spotify'

export function Header() {
  return (
    <Stack
      direction="row"
      flexWrap="nowrap"
    >
      <Logo />
      <Stack
        direction="row"
        flexWrap="nowrap"
      >
        <Spotify />
      </Stack>
    </Stack>
  )
}

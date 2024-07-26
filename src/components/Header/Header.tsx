import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Stack } from '@mui/material'
import { Link } from '../Link'
import { LogoLink } from './LogoLink'

export function Header() {
  return (
    <Container maxWidth="md">
      <Stack
        position="sticky"
        direction="row"
        flexWrap="nowrap"
        height={80}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          href="/"
          title="jeremiahhowden.com"
          TypographyProps={{
            variant: 'title3Emphasis',
            color: 'white',
          }}
        >
          jeremiahhowden
        </Link>
        <Stack
          direction="row"
          flexWrap="nowrap"
        >
          <LogoLink startIcon={<FontAwesomeIcon icon={faSpotify} />}>Spotify</LogoLink>
        </Stack>
      </Stack>
    </Container>
  )
}

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
          TypographyProps={{
            variant: 'title3Emphasis',
          }}
        >
          jeremiahhowden
        </Link>
        <Stack
          direction="row"
          flexWrap="nowrap"
          alignItems="center"
        >
          <LogoLink
            startIcon={<FontAwesomeIcon icon={faSpotify} />}
            size="small"
          >
            Spotify
          </LogoLink>
          <LogoLink
            startIcon={<FontAwesomeIcon icon={faSpotify} />}
            size="medium"
          >
            Spotify
          </LogoLink>
          <LogoLink
            startIcon={<FontAwesomeIcon icon={faSpotify} />}
            size="large"
          >
            Spotify
          </LogoLink>
          <LogoLink size="small">Spotify</LogoLink>
          <LogoLink size="medium">Spotify</LogoLink>
          <LogoLink size="large">Spotify</LogoLink>
        </Stack>
      </Stack>
    </Container>
  )
}

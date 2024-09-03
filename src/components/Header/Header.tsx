import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, IconButton } from '@mui/material'
import Stack from '@mui/material-pigment-css/Stack'
import { Link } from '../Link'
import { LogoLink } from './LogoLink'
import { faFile, faFileAlt, faFilePdf, faFileText, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ToggleTheme } from './ToggleTheme'

export function Header() {
  return (
    <div /* maxWidth="md" */>
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
          gap={4}
        >
          <Link
            href="spotify.com"
            title="spotify ↗"
            TypographyProps={{ variant: 'subheadingEmphasis' }}
          >
            Spotify
          </Link>
          <Link
            href="https://www.github.com/JerHowden"
            title="github ↗"
            TypographyProps={{ variant: 'subheadingEmphasis' }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeremiah-howden"
            title="linkedin ↗"
            TypographyProps={{ variant: 'subheadingEmphasis' }}
          >
            LinkedIn
          </Link>
          <Link
            href="/resume"
            title="resume"
            TypographyProps={{ variant: 'subheadingEmphasis' }}
          >
            Resume
          </Link>
          <ToggleTheme />
        </Stack>
      </Stack>
    </div>
  )
}

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Link } from '../Link'

export function Footer() {
  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        alignItems="stretch"
        gap={4}
        py={4}
      >
        <Divider
          flexItem
          variant="fullWidth"
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="caption"
            color="text.secondary"
          >
            © {new Date().getFullYear()} Jeremiah Howden
          </Typography>
          <Stack
            direction="row"
            alignItems="flex-end"
            gap={3}
          >
            <a
              href="https://www.github.com/JerHowden"
              title="github ↗"
            >
              <IconButton>
                <FontAwesomeIcon
                  size="1x"
                  icon={faGithub}
                />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/jeremiah-howden"
              title="linkedin ↗"
            >
              <IconButton>
                <FontAwesomeIcon
                  size="1x"
                  icon={faLinkedin}
                />
              </IconButton>
            </a>
          </Stack>
          <Link
            href="mailto:jeremiah@jeremiahhowden.com"
            title="contact me"
            TypographyProps={{ color: 'text.secondary' }}
            external
          >
            jeremiah@jeremiahhowden.com
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

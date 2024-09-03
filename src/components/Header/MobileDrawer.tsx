'use client'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Divider, Stack, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Spotify } from '../Spotify'
import { useMemo } from 'react'

type MobileDrawerProps = {
  open: boolean
  setOpen: (newOpen: boolean) => void
}

export function MobileDrawer({ open, setOpen }: MobileDrawerProps) {
  const pathname = usePathname()

  const onResume = useMemo(() => pathname === '/resume', [pathname])

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => {}}
      anchor="bottom"
      variant="temporary"
      ModalProps={{
        keepMounted: true,
        sx: {
          '& .MuiDrawer-paperAnchorBottom': {
            backgroundColor: 'background.default',
            backgroundImage: 'none',
            backdropFilter: 'blur(8px)',
          },
        },
      }}
    >
      <Stack
        direction="column"
        flexWrap="nowrap"
        gap={5}
        px={4}
        py={6}
      >
        <Spotify />
        <Divider
          variant="fullWidth"
          sx={{
            my: 4,
          }}
        />
        <a
          href="https://www.github.com/JerHowden"
          title="github ↗"
        >
          <Button
            size="large"
            startIcon={
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                style={{ aspectRatio: '1 / 1' }}
              />
            }
            sx={{ ml: '-8px' }}
          >
            GitHub
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/jeremiah-howden"
          title="linkedin ↗"
        >
          <Button
            size="large"
            startIcon={
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                style={{ aspectRatio: '1 / 1' }}
              />
            }
            sx={{ ml: '-8px' }}
          >
            LinkedIn
          </Button>
        </a>
        <Link
          href="/resume"
          title="resume"
          style={
            onResume
              ? {
                  pointerEvents: 'none',
                }
              : {}
          }
        >
          <Button
            size="large"
            startIcon={
              <FontAwesomeIcon
                icon={faFileLines}
                size="1x"
                style={{ aspectRatio: '1 / 1' }}
              />
            }
            disabled={onResume}
            onClick={() => setTimeout(() => setOpen(false), 200)}
            sx={{ ml: '-8px' }}
          >
            Resume
          </Button>
        </Link>
      </Stack>
    </SwipeableDrawer>
  )
}

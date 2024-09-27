'use client';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Stack, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Spotify } from '../Spotify';
import { LogoLink } from './LogoLink';

type MobileDrawerProps = {
  open: boolean;
  setOpen: (newOpen: boolean) => void;
};

export function MobileDrawer({ open, setOpen }: MobileDrawerProps) {
  const pathname = usePathname();

  const onResume = useMemo(() => pathname === '/resume', [pathname]);

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => {}}
      anchor="bottom"
      variant="temporary"
      sx={{ overflow: 'hidden', maxWidth: '100vw' }}
      ModalProps={{
        keepMounted: true,
        sx: {
          maxWidth: '100vw',
          '& .MuiBackdrop-root': {
            maxWidth: '100vw',
          },
          '& .MuiDrawer-paperAnchorBottom': {
            backgroundColor: 'background.default',
            backgroundImage: 'none',
            backdropFilter: 'blur(8px)',
            overflowX: 'hidden',
            maxWidth: '100vw',
          },
        },
      }}
    >
      <Stack
        direction="column"
        flexWrap="nowrap"
        overflow="hidden"
        gap={5}
        px={4}
        py={5}
      >
        <Spotify size="large" />
        <Stack
          flex={1}
          direction="row"
          justifyContent="space-between"
        >
          <a
            href="https://www.github.com/JerHowden"
            title="github ↗"
            style={{
              flex: 0,
            }}
          >
            <LogoLink
              size="large"
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ aspectRatio: '1 / 1' }}
              />
            </LogoLink>
          </a>
          <a
            href="https://www.linkedin.com/in/jeremiah-howden"
            title="linkedin ↗"
            style={{
              flex: 0,
            }}
          >
            <LogoLink
              size="large"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                style={{ aspectRatio: '1 / 1' }}
              />
            </LogoLink>
          </a>
          <Link
            href="/resume"
            title="resume"
            style={{
              pointerEvents: onResume ? 'none' : 'all',
              flex: 0,
            }}
          >
            <LogoLink
              size="large"
              title="Resume"
              disabled={onResume}
              onClick={() => setTimeout(() => setOpen(false), 200)}
            >
              <FontAwesomeIcon
                icon={faFileLines}
                size="2x"
                style={{ aspectRatio: '1 / 1' }}
              />
            </LogoLink>
          </Link>
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}

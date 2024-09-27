'use client';

import { HEADER_SIZE } from '@/lib';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Collapse,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from '../Link';
import { Spotify } from '../Spotify';
import { MobileDrawer } from './MobileDrawer';

export function Header() {
  const theme = useTheme();
  const loaded = useMediaQuery(theme.breakpoints.up(0));
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [actions, setActions] = useState<'links' | 'menu' | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [backdropBlur, setBackdropBlur] = useState(window ? Math.min(window.scrollY / 8, 8) : 0);

  useEffect(() => {
    function onScroll() {
      setBackdropBlur(Math.min(window.scrollY / 8, 8));
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActions(() => null);
    if (loaded) {
      if (mobile) {
        setTimeout(() => setActions(() => 'menu'), 300);
      } else {
        setTimeout(() => setActions(() => 'links'), 300);
      }
    }
  }, [loaded, mobile]);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'sticky',
        top: 0,
        backdropFilter: `blur(${backdropBlur}px)`,
        zIndex: 100,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          px: 4,
        }}
      >
        <Stack
          direction="row"
          flexWrap="nowrap"
          height={HEADER_SIZE}
          alignItems="center"
          justifyContent="space-between"
          gap={{
            xs: 4,
            md: 8,
          }}
        >
          <Link
            href="/"
            TypographyProps={{
              variant: 'title3Emphasis',
            }}
          >
            jeremiahhowden
          </Link>
          <Collapse
            in={actions === 'links'}
            sx={{
              overflow: 'hidden',
              '& .MuiCollapse-wrapperInner': {
                overflow: 'hidden',
              },
            }}
          >
            <Spotify size="medium" />
          </Collapse>
          <Box
            sx={{
              display: 'grid',
              '& .MuiCollapse-wrapperInner': {
                display: 'flex',
                justifyContent: 'flex-end',
              },
            }}
          >
            <Collapse
              sx={{ gridArea: '1 / 1' }}
              in={actions === 'links'}
            >
              <Stack
                direction="row"
                flexWrap="nowrap"
                alignItems="center"
                gap={5}
              >
                <Link
                  href="https://www.github.com/JerHowden"
                  title="github ↗"
                  TypographyProps={{ variant: 'subheadingEmphasis' }}
                  external
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jeremiah-howden"
                  title="linkedin ↗"
                  TypographyProps={{ variant: 'subheadingEmphasis' }}
                  external
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
              </Stack>
            </Collapse>
            <Collapse
              sx={{ gridArea: '1 / 1' }}
              in={actions === 'menu'}
            >
              <IconButton
                sx={{ p: 2, mr: -2 }}
                onClick={() => setDrawerOpen(true)}
                color="primary"
                size="large"
              >
                <FontAwesomeIcon
                  style={{ aspectRatio: '1 / 1' }}
                  size="1x"
                  icon={faBars}
                />
              </IconButton>
            </Collapse>
          </Box>
        </Stack>
        <MobileDrawer
          open={drawerOpen}
          setOpen={setDrawerOpen}
        />
      </Container>
    </Box>
  );
}

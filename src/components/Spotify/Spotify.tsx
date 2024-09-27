'use client';

import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Card, Collapse, keyframes, Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect } from 'react';
import useSWR from 'swr';
import { OverflowText } from './OverflowText';
import { SpotifyNowPlaying } from './types';

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`;

type SpotifyProps = {
  size: 'medium' | 'large';
};

export function Spotify({ size }: SpotifyProps) {
  const {
    data,
    isLoading,
    error,
  }: { data: SpotifyNowPlaying | undefined; isLoading: boolean; error: any } =
    useSWR('/api/spotify');

  const cardSx: SxProps = {
    cursor: 'pointer',
    title: data?.isPlaying ? 'Spotify ↗' : 'Not listening to Spotify',
    ...(size === 'medium'
      ? {
          p: 0,
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        }
      : {}),
    ...(size === 'large'
      ? {
          p: 4,
          backgroundColor: data?.isPlaying ? '#1DB954' : 'background.paper',
          borderRadius: 2,
        }
      : {}),
  };

  return (
    <a
      href={data?.linkURL}
      style={{
        textDecoration: 'none',
        pointerEvents: data?.isPlaying && data?.linkURL ? 'all' : 'none',
      }}
    >
      <Card sx={cardSx}>
        <Stack
          direction="row"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Collapse
            in={data?.isPlaying}
            orientation="horizontal"
            unmountOnExit
            sx={{
              overflow: 'hidden',
              '& .MuiCollapse-wrapperInner': {
                overflow: 'hidden',
              },
            }}
          >
            <Stack
              direction="row"
              gap={4}
              alignItems="center"
            >
              <Image
                src={data?.imageURL ?? ''}
                width={size === 'medium' ? 36 : 50}
                height={size === 'medium' ? 36 : 50}
                alt={data?.album ?? 'Album Art'}
                style={{ borderRadius: 2 }}
                title={`${data?.album}`}
              />
              <Stack
                direction="column"
                justifyContent="space-evenly"
                overflow="hidden"
              >
                <OverflowText
                  variant="body1Emphasis"
                  color="textPrimary"
                  title={`${data?.title}`}
                  lineHeight={1}
                >
                  {data?.title}
                </OverflowText>
                <OverflowText
                  variant="label"
                  color="textSecondary"
                  title={`${data?.artist}`}
                  lineHeight={1}
                >
                  {data?.artist}
                </OverflowText>
              </Stack>
            </Stack>
          </Collapse>
          <Stack
            direction="row"
            gap={4}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{
                animation: data?.isPlaying
                  ? `${pulse} 2s cubic-bezier(.4,0,.6,1) infinite`
                  : 'none',
                color: data?.isPlaying
                  ? size === 'medium'
                    ? '#1DB954'
                    : 'text.primary'
                  : 'text.secondary',
              }}
            >
              <FontAwesomeIcon
                icon={faSpotify}
                size={size === 'medium' ? '2x' : '3x'}
                style={{ aspectRatio: '1 / 1' }}
                title="Spotify ↗"
              />
            </Box>
            <Collapse
              in={size === 'large' && !data?.isPlaying}
              orientation="horizontal"
              unmountOnExit
              sx={{
                '& .MuiCollapse-wrapperInner': {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              <Typography
                variant="body1Emphasis"
                color="textSecondary"
                sx={{ whiteSpace: 'pre' }}
              >
                Not Listening
              </Typography>
            </Collapse>
          </Stack>
        </Stack>
      </Card>
    </a>
  );
}

import { HEADER_SIZE } from '@/lib';
import { Container, Stack, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jeremiah Howden',
  description: 'Homepage',
};

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{ px: 4, py: 8, minHeight: `calc(100% - ${HEADER_SIZE}px)` }}
    >
      <Stack
        direction="column"
        gap={3}
      >
        <Typography variant="display1Emphasis">Hi, I'm Jeremiah</Typography>
        <Typography variant="body1">
          A front-end developer with over 6 years of professional experience. I specialize in
          bringing designs to life and making workflows seamless. You can find my resume from a link
          at the top or contact me through my email at the bottom.
        </Typography>
      </Stack>
    </Container>
  );
}

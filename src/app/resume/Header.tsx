import { Divider, Stack, Typography } from '@mui/material'

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <Stack
      direction="column"
      gap={1}
    >
      <Typography
        variant="title3Emphasis"
        textTransform="uppercase"
      >
        {title}
      </Typography>
      <Divider variant="fullWidth" />
    </Stack>
  )
}

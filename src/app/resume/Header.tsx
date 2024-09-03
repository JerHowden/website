import { Divider, Typography } from '@mui/material'
import Stack from '@mui/material-pigment-css/Stack'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
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

import { Button, ButtonProps, IconButton, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type LogoLinkProps = ButtonProps & {
  children: ReactNode
  title: string
}

export function LogoLink({ children, title, ...props }: LogoLinkProps) {
  return (
    <Stack
      direction="column"
      gap={2}
      alignItems="center"
    >
      <IconButton
        size="large"
        variant="contained"
        sx={{
          color: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => `${theme.palette.primary.main}80`,
          borderRadius: 2,
        }}
        {...props}
      >
        {children}
      </IconButton>
      <Typography
        variant="labelEmphasis"
        color="textPrimary"
      >
        {title}
      </Typography>
    </Stack>
  )
}

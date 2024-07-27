'use client'

import { Button, ButtonProps, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react'

type LogoLinkProps = ButtonProps & {
  children: ReactNode
}

export function LogoLink({ children, ...props }: LogoLinkProps) {
  const theme = useTheme()

  return (
    <Button
      variant="text"
      size="medium"
      color="primary"
      sx={{}}
      {...props}
    >
      {children}
    </Button>
  )
}

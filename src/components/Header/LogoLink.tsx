'use client'

import { Button, ButtonProps, Typography } from '@mui/material'
import { ReactNode } from 'react'

type LogoLinkProps = ButtonProps & {
  children: ReactNode
}

export function LogoLink({ children, ...props }: LogoLinkProps) {
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

import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

type LogoLinkProps = ButtonProps & {
  children: ReactNode
}

export function LogoLink({ children, ...props }: LogoLinkProps) {
  return (
    <Button
      variant="text"
      {...props}
    >
      {children}
    </Button>
  )
}

import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

type LogoLinkProps = ButtonProps & {
  children: ReactNode
}

export function LogoLink({ children, ...props }: LogoLinkProps) {
  return (
    <Button
      size="large"
      color="primary"
      variant="contained"
      sx={{
        flexDirection: 'column',
        gap: 3,
        borderRadius: 2,
        '& .MuiButton-icon': {
          mx: 0,
          '& svg': {
            fontSize: '3em',
          },
        },
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

import { Typography, TypographyProps } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode, useMemo } from 'react'

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type LinkProps = (
  | (NextLinkProps & {
      external?: false
    })
  | (AnchorProps & {
      external: true
    })
) & {
  children: ReactNode
  TypographyProps?: TypographyProps
}

export function Link({ children, external, TypographyProps, ...props }: LinkProps) {
  const text = useMemo(
    () => (
      <Typography
        sx={{
          display: 'inline-block',
          '&::after': {
            display: 'block',
            transform: 'scaleX(0)',
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: 'white',
            content: '""',
            transitionProperty: 'all',
            transitionDuration: '0.3s',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          },
        }}
        {...TypographyProps}
      >
        {children}
      </Typography>
    ),
    [children, TypographyProps]
  )

  if (external) {
    return <a {...(props as AnchorProps)}>{text}</a>
  }

  return (
    <NextLink
      {...(props as NextLinkProps)}
      style={{
        textDecoration: 'none',
      }}
    >
      {text}
    </NextLink>
  )
}

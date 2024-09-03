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
          transitionProperty: 'all',
          transitionDuration: '0.3s',
          '&::after': {
            display: 'block',
            transform: 'scaleX(0)',
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: 'text.primary',
            content: '""',
            transitionProperty: 'all',
            transitionDuration: '0.3s',
          },
          '&:hover': {
            color: 'text.primary',
            '&::after': { transform: 'scaleX(1)' },
          },
        }}
        color="text.primary"
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

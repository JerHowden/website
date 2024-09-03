import { Button, ButtonProps, IconButton, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type LogoLinkProps = ButtonProps & {
  children: ReactNode;
  title: string;
};

export function LogoLink({ children, title, disabled, ...props }: LogoLinkProps) {
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
          color: (theme) => theme.palette.text.primary,
          backgroundColor: (theme) => theme.palette.text.disabled,
          borderRadius: 2,
        }}
        disabled={disabled}
        {...props}
      >
        {children}
      </IconButton>
      <Typography
        variant="labelEmphasis"
        color={disabled ? 'textDisabled' : 'textPrimary'}
      >
        {title}
      </Typography>
    </Stack>
  );
}

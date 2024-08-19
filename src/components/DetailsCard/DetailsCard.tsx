import { Card } from '@mui/material'
import { ReactNode } from 'react'

type DetailsCardProps = {
  children: ReactNode
}

export function DetailsCard({ children }: DetailsCardProps) {
  return <Card sx={{ bgcolor: 'background.paper' }}>{children}</Card>
}

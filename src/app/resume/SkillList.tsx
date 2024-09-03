import { Skill } from '@/lib'
import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'

export function SkillList({ domain, list }: Skill) {
  const skills: string = useMemo(() => list.join(', '), [list])

  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      rowGap={1}
      columnGap={2}
    >
      <Typography variant="body1Emphasis">{domain}:</Typography>
      <Typography variant="body1">{skills}</Typography>
    </Stack>
  )
}

import { Skill } from '@/lib'
import { Typography } from '@mui/material'
import Stack from '@mui/material-pigment-css/Stack'

export function SkillList({ domain, list }: Skill) {
  return (
    <Stack
      direction="row"
      gap={2}
    >
      <Typography variant="body1Emphasis">{domain}:</Typography>
      <Typography variant="body1">{list.join(', ')}</Typography>
    </Stack>
  )
}

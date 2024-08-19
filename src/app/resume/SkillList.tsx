import { Skill } from '@/lib'
import { Stack, Typography } from '@mui/material'

export default function SkillList({ domain, list }: Skill) {
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

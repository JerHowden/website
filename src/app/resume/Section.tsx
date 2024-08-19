import { Section as SectionProps } from '@/lib'
import { Stack, Typography } from '@mui/material'

type DetailListProps = {
  details: string[]
}

function DetailList({ details }: DetailListProps) {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '1em',
        margin: 0,
      }}
    >
      {details.map((detail) => (
        <Typography
          key={detail}
          variant="body2"
          component="li"
        >
          {detail}
        </Typography>
      ))}
    </ul>
  )
}

export function Section({ company, location, startDate, endDate, roles }: SectionProps) {
  return (
    <Stack
      direction="column"
      gap={1}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {company} — {location}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {startDate} - {endDate}
        </Typography>
      </Stack>
      {roles.map((role) => (
        <Stack
          key={role.title}
          direction="column"
          gap={3}
        >
          <Stack direction="column">
            <Typography variant="headingEmphasis">{role.title}</Typography>
            <DetailList details={role.details} />
          </Stack>
          {role.projects.map((project) => (
            <Stack
              key={project.title}
              direction="column"
              ml="1em"
            >
              <Typography
                variant="headingEmphasis"
                sx={{ textDecoration: 'underline' }}
              >
                {project.title}
              </Typography>
              <DetailList details={project.details} />
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

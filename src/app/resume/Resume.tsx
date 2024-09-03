'use client'

import { resume } from '@/lib'
import { Card, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { Header } from './Header'
import { Section } from './Section'
import { SkillList } from './SkillList'

export function Resume() {
  return (
    <Link
      href="/resume.pdf"
      // title="Resume File 🗎"
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: 'background.default',
          color: 'text.primary',
          borderRadius: 0,
          p: {
            xs: 4,
            md: 5,
          },
          '&:hover': {
            boxShadow: 5,
          },
        }}
      >
        <Stack
          direction="column"
          gap={4}
        >
          <Fade
            cascade
            damping={0.618}
            duration={800}
            triggerOnce
          >
            <Stack direction="column">
              <Typography variant="display2Emphasis">{resume.personal.name}</Typography>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                gap={3}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {resume.personal.website}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                >
                  ●
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {resume.personal.email}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              gap={3}
            >
              <Header title="Objective" />
              <Typography variant="body1">{resume.objective}</Typography>
            </Stack>
            <Stack
              direction="column"
              gap={3}
            >
              <Header title="Experience" />
              {resume.experience.map((job) => (
                <Section
                  key={job.company}
                  {...job}
                />
              ))}
            </Stack>
            <Stack
              direction="column"
              gap={3}
            >
              <Header title="Education" />
              {resume.education.map((school) => (
                <Section
                  key={school.company}
                  {...school}
                />
              ))}
            </Stack>
            <Stack
              direction="column"
              gap={3}
            >
              <Header title="Skills" />
              <Stack
                direction="column"
                columnGap={1}
                rowGap={2}
              >
                {resume.skills.map((skills) => (
                  <SkillList {...skills} />
                ))}
              </Stack>
            </Stack>
          </Fade>
        </Stack>
      </Card>
    </Link>
  )
}

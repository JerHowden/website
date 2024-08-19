import { resume, Section as SectionType, Skill as SkillType } from '@/lib'
import { Card, Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Jeremiah's Resume",
  description: "Jeremiah Howden's Resume",
}

type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <Stack
      direction="column"
      gap={1}
    >
      <Typography
        variant="title3Emphasis"
        textTransform="uppercase"
      >
        {title}
      </Typography>
      <Divider variant="fullWidth" />
    </Stack>
  )
}

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

function Section({ company, location, startDate, endDate, roles }: SectionType) {
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

function SkillList({ domain, list }: SkillType) {
  return (
    <Stack
      direction="row"
      gap={2}
    >
      <Typography variant="body1Emphasis">{domain}:</Typography>
      <Typography variant="body1">
        {list.map((skill, index) => (index !== list.length - 1 ? `${skill}, ` : skill))}
      </Typography>
    </Stack>
  )
}

export default function Resume() {
  const test = true

  if (test) {
    return (
      <Container maxWidth="md">
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
              p: 5,
              '&:hover': {
                boxShadow: 5,
              },
            }}
          >
            <Stack
              direction="column"
              gap={4}
            >
              <Stack direction="column">
                <Typography variant="display2Emphasis">{resume.personal.name}</Typography>
                <Stack
                  direction="row"
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
                  gap={1}
                >
                  {resume.skills.map((skills) => (
                    <SkillList {...skills} />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Link>
      </Container>
    )
  }

  return (
    <div className="w-full h-full max-w-3xl p-4">
      <Link
        href="/resume.pdf"
        className="w-full h-full"
        title="Download ↓"
      >
        <div className="flex flex-col px-4 py-12 border border-black 2xl:px-8 2xl:py-16 dark:border-white gap-y-8 md:gap-y-6 hover:bg-black dark:hover:bg-white backdrop-filter backdrop-blur dark:hover:bg-opacity-10 hover:bg-opacity-10 backdrop-saturate-200">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white">Jeremiah Howden</h1>
            <div className="flex flex-col text-sm text-gray-600 md:flex-row gap-x-2 dark:text-gray-400">
              <span>jeremiahhowden.com</span>
              <span className="hidden md:inline">●</span>
              <span>jeremiah@jeremiahhowden.com</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">EXPERIENCE</h2>
            <hr className="mb-2 border-black dark:border-white" />
            <div className="flex flex-col gap-y-6 md:gap-y-4">
              <div className="flex flex-col gap-y-2 md:gap-y-1">
                <div className="flex flex-col justify-between w-full text-gray-700 md:flex-row dark:text-gray-300">
                  <span>EOG Resources – Houston, TX / Remote</span>
                  <span className="text-sm md:text-base">2021 - Present</span>
                </div>
                <div>
                  <div className="-mb-1 text-lg font-semibold">React Developer</div>
                  <ul className="ml-4 text-sm text-gray-800 list-disc dark:text-gray-200">
                    <li>
                      Developing mobile and responsive applications for the operations optimization
                      team.
                    </li>
                    <li>
                      Facilitate user requirements and business objectives with direct user contact
                      and field experience.
                    </li>
                  </ul>
                </div>
                <div className="ml-0 md:ml-4">
                  <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                    iPowerLift
                  </div>
                  <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                    <li>
                      Internal application for field engineers to optimize and automate oil and gas
                      production built with React, Redux, and Material UI.
                    </li>
                    <li>
                      Designed and created mobile application version of iPowerLift, onboarding 300+
                      users including 80+ new users.
                    </li>
                    <li>
                      Currently lead mobile development with emphasis on user experience, mobile
                      design, and responsive design renovation.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 md:gap-y-1">
                <div className="flex flex-col justify-between w-full text-gray-700 md:flex-row dark:text-gray-300">
                  <span>Novacoast, Inc. – Santa Barbara, CA / Remote</span>
                  <span className="text-sm md:text-base">2017 - 2021</span>
                </div>
                <div>
                  <div className="-mb-1 text-lg font-semibold">Software Developer</div>
                  <ul className="ml-4 text-sm text-gray-800 list-disc dark:text-gray-200">
                    <li>
                      Developed and led full-stack web applications for internal processes
                      leveraging technologies including React, Golang, PHP, MySQL, and Docker.
                    </li>
                    <li>
                      Orchestrated and engaged in agile scrum development with team members on
                      multiple projects.
                    </li>
                    <li>
                      Gathered comprehensive user requirements for understanding design and
                      functionality implications.
                    </li>
                  </ul>
                </div>
                <div className="ml-0 md:ml-4">
                  <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                    Portfolio
                  </div>
                  <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                    <li>
                      Developed a fully deployed and Lighthouse 95+% portfolio site with Next.js,
                      TypeScript, Tailwind CSS, and Vercel.
                    </li>
                  </ul>
                </div>
                <div className="ml-0 md:ml-4">
                  <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                    TackleBox
                  </div>
                  <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                    <li>
                      Internal application built on React and Flask that monitors client domains for
                      phishing attacks.
                    </li>
                    <li>
                      Produced front-end MVP, mentored UCSB capstone team in React to continue with
                      risk analysis.
                    </li>
                  </ul>
                </div>
                <div className="ml-0 md:ml-4">
                  <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                    Invoice System
                  </div>
                  <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                    <li>
                      Enterprise-level application used by all Novacoast departments for tracking
                      billing and invoicing clients leveraging React, Golang, and MySQL.
                    </li>
                    <li>
                      Lead developer responsible for all stages of development and deployment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">EDUCATION</h2>
            <hr className="mb-2 border-black dark:border-white" />
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <div className="flex flex-col justify-between w-full text-gray-700 md:flex-row dark:text-gray-300">
                <span>Texas Tech University – Lubbock, TX</span>
                <span className="text-sm md:text-base">2017 - 2020</span>
              </div>
              <div>
                <div className="-mb-1 text-lg font-semibold">
                  B.S. Computer Science, Minor in Mathematics
                </div>
                <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                  <li>
                    <span className="italic">Senior Engineer</span>, Association for Computing
                    Machinery
                  </li>
                  <li>
                    <span className="italic">Honor List</span>, Fall 2019, Spring 2020, Fall 2020
                  </li>
                </ul>
              </div>
              <div className="ml-0 md:ml-4">
                <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                  Athena Mobile Application
                </div>
                <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                  <li>
                    University capstone project using React Native, Expo, and Firebase in a team of
                    five with full software design specification.
                  </li>
                  <li>Led front-end team through React Native and design principles.</li>
                </ul>
              </div>
              <div className="ml-0 md:ml-4">
                <div className="-mb-1 text-lg font-semibold text-gray-800 underline dark:text-gray-200">
                  Texas Tech Freshman Guide
                </div>
                <ul className="ml-4 text-sm text-gray-700 list-disc dark:text-gray-300">
                  <li>
                    Final project for an HCI course using React and Mapbox, deployed with GitHub
                    Pages.
                  </li>
                  <li>
                    Created a custom interactive map of the TTU campus to help students find their
                    dorms, classes, and restaurants.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">SKILLS</h2>
            <hr className="mb-2 border-black dark:border-white" />
            <ul className="flex flex-col text-sm text-gray-700 dark:text-gray-300 gap-y-2 md:gap-y-0.5">
              <li>
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  Technologies:
                </span>{' '}
                React, Next.js, Redux, Tailwind CSS, Material UI, Sass, React Native, MySQL
              </li>
              <li>
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  Programming Languages:
                </span>{' '}
                TypeScript, HTML / CSS / JavaScript, SQL, Python, Java, PHP, Golang
              </li>
              <li>
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  DevOps:
                </span>{' '}
                GitHub, Git, Docker, Agile Development
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}

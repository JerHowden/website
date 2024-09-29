import { Box, Stack } from '@mui/material';
import { DetailsCard } from '../DetailsCard';
import { Link } from '../Link';

export function Projects() {
  return (
    <Stack
      direction="column"
      gap={5}
    >
      <DetailsCard
        title="jeremiahhowden.com"
        tags={['GitHub', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Spotify API', 'Vercel']}
        repoURL="https://github.com/JerHowden/website"
        dates="Personal — 2021"
        description="Right here, this is my personal site."
      />
      <DetailsCard
        image="jobs/heritage-plaza-night.jpg"
        title="EOG Resources"
        dates="2021 - 2024"
        description={
          <>
            Internal EOG application for field engineers to track oil wells primarily focusing on{' '}
            <Link
              href="https://recharts.org/"
              external
              inline
            >
              data visualization
            </Link>
            ,{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Gas_lift"
              external
              inline
            >
              gas lift optimization
            </Link>
            ,{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Plunger_lift"
              external
              inline
            >
              plunger tracking
            </Link>
            , control setpoints, etc. Currently leading mobile development and user experience."
          </>
        }
        tags={['React', 'TypeScript', 'Redux', 'MUI']}
      />

      <DetailsCard
        title="AD Discovery & Remediation"
        tags={['GitHub', 'PowerShell']}
        repoURL="https://github.com/JerHowden/active-directory"
        dates="Novacoast — 2021"
        description="Novacoast project for a client categorizing users and groups in Active Directory into active, questionable, and inactive. 
                              Heavy usage of PowerShell and Excel."
      />
      <DetailsCard
        title="TackleBox"
        links={['/tacklebox.pdf']} // change this to icon button with link
        tags={['Repository', 'React', 'JavaScript', 'Baseweb']}
        repoURL="https://capstone.cs.ucsb.edu/past21.html#team8"
        dates="Novacoast — 2020-2021"
        description={
          <p>
            Novacoast application transitioned into a UCSB capstone project. Provides a user
            interface and cron job for discovering phishing sites for clients and analyzing the
            threat level. Led the front-end team and built with{' '}
            <a
              className="p-0 link"
              href="https://github.com/ChristopherGarsia"
            >
              Chris
            </a>{' '}
            and{' '}
            <a
              className="p-0 link"
              href="https://github.com/eric-guerrero"
            >
              Eric
            </a>
            .
          </p>
        }
      />
      <DetailsCard
        title="Athena"
        tags={['GitHub', 'React Native', 'JavaScript', 'Google Cloud', 'Figma']}
        repoURL="https://github.com/Athena-Capstone-2020/athena-mobile-app"
        dates="University — 2020"
        description={
          <p>
            Capstone Project to track food expiration and meal planning. Created with the purpose of
            minimizing food waste and creating recipes from a user&apos;s pantry as a remedy. Built
            with{' '}
            <a
              className="p-0 link"
              href="https://github.com/Eliascm17"
            >
              Elias
            </a>
            ,{' '}
            <a
              className="p-0 link"
              href="https://github.com/BlaineSieck"
            >
              Blaine
            </a>
            ,{' '}
            <a
              className="p-0 link"
              href="https://github.com/rgoonie"
            >
              Rajeev
            </a>
            , and{' '}
            <a
              className="p-0 link"
              href="https://github.com/ynigoreyes"
            >
              Miggy
            </a>
            .
          </p>
        }
      />
      <DetailsCard
        title="TTU Freshman Guide"
        links={['https://jerhowden.github.io/TexasTechFreshmanGuide/']} // change this to icon button with link
        tags={['GitHub', 'React', 'JavaScript', 'Mapbox']}
        repoURL="https://github.com/JerHowden/TexasTechFreshmanGuide"
        dates="University — 2019"
        description={
          <p>
            This website was the final project for a Human-Computer Interaction class. It features
            an interactive map with clickable buildings and searchable locations by name, code, and
            tags. Built with{' '}
            <a
              href="https://twitter.com/Eliascm17"
              className="p-0 link"
            >
              Elias
            </a>
            .
          </p>
        }
      />
      <DetailsCard
        title="Invoice v2"
        tags={['React', 'JavaScript', 'Bootstrap', 'Golang', 'MySQL']}
        dates="Novacoast — 2018-2020"
        description="A comprehensive billing application meant for connecting different business units. The project featured billing time management, accounting approval, and managerial oversight. I learned React on this and rebuilt the site twice as I learned more efficient methods."
      />
    </Stack>
  );
}

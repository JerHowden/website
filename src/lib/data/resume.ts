type Project = {
  title: string
  details: string[]
}

type Role = {
  title: string
  details: string[]
  projects: Project[]
}

type Section = {
  company: string
  location: string
  startDate: string
  endDate: string
  roles: Role[]
}

type Skill = {
  domain: string
  list: string[]
}

type Resume = {
  personal: {
    name: string
    email: string
    website: string
  }
  objective: string
  experience: Section[]
  education: Section[]
  skills: Skill[]
}

export const resume: Resume = {
  objective:
    'I am a front-end React developer specializing in intuitive and accessible user interfaces to enhance user experience and streamline workflows. Leveraging my years of experience and ability to empathize with users, I am seeking an opportunity to resolve stakeholder challenges and elevate projects to a higher standard.',
  personal: {
    name: 'Jeremiah Howden',
    email: 'jeremiahhowden@gmail.com',
    website: 'jeremiahhowden.com',
  },
  experience: [
    {
      company: 'EOG Resources',
      location: 'Houston, TX / Remote',
      startDate: 'Nov 2021',
      endDate: 'Jul 2024',
      roles: [
        {
          title: 'React Developer',
          details: [
            'Coordinated with stakeholders on project value and workflow remotely and in the field, and presented updates to leadership and development team in an agile environment.',
            'Built reusable React components with responsive design principles, TSDoc documentation, and utilized across multiple sprint teams to facilitate cohesive user interface and experience.',
            'Designed and created mobile application version of iPowerlift including navigation, forms, and dashboards, onboarding 200+ existing users and 80+ new users.',
          ],
          projects: [
            {
              title: 'iPowerlift',
              details: [
                'Internal application for field engineers to optimize and automate oil and gas production built with React, Redux, and MUI.',
                'Redesigned and implemented the user interface of a plunger optimization application, enhancing user experience and data transparency, resulting in a 100% increase in optimizer adoption rate and improved stakeholder relations.',
              ],
            },
          ],
        },
      ],
    },
    {
      company: 'Novacoast, Inc.',
      location: 'Santa Barbara, CA / Remote',
      startDate: 'Dec 2017',
      endDate: 'Sep 2021',
      roles: [
        {
          title: 'Software Developer',
          details: [
            'Developed and led full-stack web applications for internal processes leveraging React, Golang, PHP, MySQL, and Docker.',
            'Orchestrated and engaged in agile scrum development with team members on multiple projects.',
            'Gathered comprehensive user requirements from a variety of roles and positions.',
          ],
          projects: [
            {
              title: 'Invoice System',
              details: [
                'Enterprise-level application used by all Novacoast departments for tracking billing and invoicing clients leveraging React, Golang, and MySQL.',
                'Lead developer responsible for all stages of development and deployment.',
              ],
            },
            {
              title: 'TackleBox',
              details: [
                'Internal application built on React and Flask that monitors client domains for phishing attacks.',
                'Produced front-end MVP, mentored UCSB capstone team in React to continue with risk analysis.',
              ],
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      company: 'Texas Tech University',
      location: 'Lubbock, TX',
      startDate: 'Aug 2017',
      endDate: 'Dec 2020',
      roles: [
        {
          title: 'B.S. Computer Science, Minor in Mathematics',
          details: [
            'Senior Engineer, Association for Computer Machinery',
            'Honor List, Fall 2019, Spring 2020, Fall 2020',
          ],
          projects: [
            {
              title: 'Athena Mobile Application',
              details: [
                'University capstone project using React Native, Expo, and Firebase in a team of five with full software design specification.',
                'Led front-end team through React Native and design principles.',
              ],
            },
            {
              title: 'Texas Tech Freshman Guide',
              details: [
                'Final project for an HCI course using React and Mapbox, deployed with GitHub Pages.',
                'Created a custom interactive map of the TTU campus to help students find their dorms, classes, and restaurants.',
              ],
            },
          ],
        },
      ],
    },
  ],
  skills: [],
} as const

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
    sections: Section[]
    skills: Skill[]
}

export const resume: Resume = {
    personal: {
        name: "Jeremiah Howden",
        email: "jeremiahhowden@gmail.com",
        website: "jeremiahhowden.com"
    },
    sections: [],
    skills: [],
} as const

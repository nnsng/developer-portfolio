export type Blog = {
  title: string
  description: string
  published_at: string
  public_reactions_count: number
  comments_count: number
  cover_image: string
  url: string
  reading_time_minutes: number
}

export type Project = {
  id: number
  name: string
  description: string
  tools: string[]
  role: string
  code: string
  tags: string[]
  features: string[]
  demo: string
  image: {
    src: string
  }
}

export type Education = {
  id: number
  title: string
  duration: string
  institution: string
}

export type Experience = {
  id: number
  title: string
  company: string
  duration: string
}

export type Contact = {
  email: string
  phone: string
  address: string
  github: string
  facebook?: string
  linkedIn?: string
  stackOverflow?: string
  devUsername?: string
}

export type Personal = Contact & {
  name: string
  profile: string
  designation: string
  description: string
  leetcode?: string
  resume?: string
}

import type { IconType } from 'react-icons'

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
  id: string
  name: string
  description: string
  tools: string[]
  role: string
  code: string
  demo: string
}

export type Education = {
  id: string
  title: string
  duration: string
  institution: string
}

export type Experience = {
  id: string
  title: string
  company: string
  duration: string
}

export type Skill = {
  id: string
  name: string
}

export type Personal = {
  name: string
  profile: string
  designation: string
  description: string
  resume: string
  email: string
  phone: string
  address: string
  github: string
  linkedIn: string
  dev: string
  leetcode: string
  facebook: string
  stackOverflow: string
  skills: string[]
}

export type SocialKey = Extract<
  keyof Personal,
  'github' | 'linkedIn' | 'dev' | 'leetcode' | 'stackOverflow' | 'facebook'
>

export type Social = {
  key: SocialKey
  icon: IconType
  link: string
}

import type { Contact } from '@/types'
import { env } from '../env'

export const contactData: Contact = {
  email: env('NEXT_PUBLIC_EMAIL'),
  phone: env('NEXT_PUBLIC_PHONE'),
  address: env('NEXT_PUBLIC_ADDRESS'),
  github: `https://github.com/${env('NEXT_PUBLIC_GITHUB_USERNAME')}`,
  // facebook: 'https://www.facebook.com/',
  linkedIn: `https://www.linkedin.com/in/${env('NEXT_PUBLIC_LINKEDIN_USERNAME')}`,
  // stackOverflow: 'https://stackoverflow.com/',
  devUsername: env('NEXT_PUBLIC_DEV_USERNAME'),
}

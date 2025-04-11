import type { Personal } from '@/types'
import { env } from '../env'
import { contactData } from './contact'

const NAME = 'Nguyen Ngoc Sang'

export const personalData: Personal = {
  ...contactData,
  name: NAME,
  profile: '/profile.png',
  designation: 'Front-end Developer',
  description: `My name is ${NAME}. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.`,
  leetcode: `https://leetcode.com/${env('NEXT_PUBLIC_LEETCODE_ID')}`,
  resume: env('NEXT_PUBLIC_RESUME_URL'),
}

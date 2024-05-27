import type { Project } from '@/types'
import crefin from '/public/image/crefin.jpg'

export const projectsData: Project[] = [
  {
    id: 1,
    name: '1social.',
    description: 'A website that uses markdown to create blog posts',
    tools: [
      'React',
      'Material UI',
      'Redux Toolkit',
      'React Hook Form',
      'Express',
      'MongoDB',
      'JWT',
      'SocketIO',
    ],
    role: 'Fullstack Developer',
    code: '',
    demo: 'https://1social.vercel.app',
    tags: [],
    features: [],
    image: crefin,
  },
]

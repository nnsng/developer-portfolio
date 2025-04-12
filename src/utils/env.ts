import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string(),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string(),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string(),

  NOTION_API_URL: z.string(),
  NOTION_VERSION: z.string(),
  NOTION_API_KEY: z.string(),

  NOTION_ABOUT_DATABASE_ID: z.string(),
  NOTION_EXPERIENCES_DATABASE_ID: z.string(),
  NOTION_SKILLS_DATABASE_ID: z.string(),
  NOTION_PROJECTS_DATABASE_ID: z.string(),
  NOTION_EDUCATIONS_DATABASE_ID: z.string(),
})

export const env = envSchema.safeParse(process.env).data ?? ({} as z.infer<typeof envSchema>)

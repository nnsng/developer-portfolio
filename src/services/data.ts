import type { Education, Experience, Personal, Project, Skill } from '@/types/data'
import { env } from '@/utils/env'
import { getNotionDatabaseId, mapNotionResponse, splitListString } from '@/utils/notion'

const fetchNotionData = async (databaseId: string) => {
  const response = await fetch(`${env.NOTION_API_URL}/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      Authorization: env.NOTION_API_KEY,
      'Content-Type': 'application/json',
      'Notion-Version': env.NOTION_VERSION,
    },
  })
  return response.json()
}

const getData = async <T = unknown>(database: string): Promise<T[]> => {
  const databaseId = getNotionDatabaseId(database)
  if (!databaseId) {
    console.error('Invalid database ID:', database)
    return []
  }

  const notionData = await fetchNotionData(databaseId)
  return mapNotionResponse(notionData)
}

export const getPersonalData = async () => {
  const response = await getData<{ name: keyof Personal; value: string }>('about')
  return response.reduce((data, item) => {
    let value: Personal[keyof Personal] = item.value

    if (item.name === 'skills') {
      value = splitListString(value)
    }

    return {
      ...data,
      [item.name]: value,
    }
  }, {} as Personal)
}

export const getExperienceData = async () => {
  return getData<Experience>('experiences')
}

export const getSkillData = async () => {
  return getData<Skill>('skills')
}

export const getProjectData = async () => {
  const data = await getData<Project & { tools: string }>('projects')
  return data.map((project) => ({
    ...project,
    tools: splitListString(project.tools),
  })) as Project[]
}

export const getEducationData = async () => {
  return getData<Education>('educations')
}

import type { DatabaseUppercase } from '@/types/database'
import type { NotionProperties, NotionProperty, NotionResponse } from '@/types/notion'
import { env } from './env'

const mapProperty = (property: NotionProperty) => {
  switch (property.type) {
    case 'title': {
      return property.title?.[0]?.text.content ?? ''
    }
    case 'rich_text': {
      return property.rich_text?.[0]?.text.content ?? ''
    }
    case 'url': {
      return property.url ?? ''
    }
    default: {
      return ''
    }
  }
}

const mapNotionProperties = (properties: NotionProperties) => {
  if (!properties || typeof properties !== 'object') {
    return {}
  }

  return Object.keys(properties).reduce((data, key) => {
    const value = mapProperty(properties[key])
    return { ...data, [key]: value }
  }, {})
}

export const mapNotionResponse = <T>(response: NotionResponse): T[] => {
  if (!response || !response.results) return []

  const properties = response.results.map((result) => {
    const properties = mapNotionProperties(result.properties)
    return {
      id: result.id,
      ...properties,
    } as T
  })

  return properties
}

export const getNotionDatabaseId = (database: string) => {
  const databaseUppercase = database.toUpperCase() as DatabaseUppercase
  return env[`NOTION_${databaseUppercase}_DATABASE_ID`] ?? ''
}

export const splitListString = (list: string) => {
  return list.split(/,\s?/).map((item) => item.trim())
}

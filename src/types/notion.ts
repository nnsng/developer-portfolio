export type NotionResponse = {
  results: NotionResult[]
}

export type NotionResult = {
  id: string
  properties: NotionProperties
}

export type NotionProperties = {
  [key: string]: NotionProperty
}

export type NotionProperty = {
  type: string
  url?: string
  title?: NotionText[]
  rich_text?: NotionText[]
}

export type NotionText = {
  text: {
    content: string
  }
}

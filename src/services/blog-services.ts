import { personalData } from '@/data/personal'
import type { Blog } from '@/types'

export const getBlogData = async () => {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Blog[] = await res.json()
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5)

  return filtered
}

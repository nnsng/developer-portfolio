import type { Blog } from '@/types/data'

export const getBlogData = async (username: string) => {
  const res = await fetch(`https://dev.to/api/articles?username=${username}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Blog[] = await res.json()
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5)

  return filtered
}

export interface Post {
  id: string
  title: string
  titleEn: string
  date: string
  year: number
  bannerType: 1 | 2 | 3
  featured?: boolean
  image: string
  video?: string
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  tags: string[]
  tagsEn: string[]
} 
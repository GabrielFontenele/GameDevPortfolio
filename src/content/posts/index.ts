import { pauEPedraPost } from './pau-e-pedra'

export interface PostContent {
  pt: {
    title: string
    excerpt: string
    content: string
    tags: string[]
  }
  en: {
    title: string
    excerpt: string
    content: string
    tags: string[]
  }
}

export interface Post {
  id: string
  title: string
  titleEn: string
  date: string
  year: number
  bannerType: 1 | 2 | 3
  image: string
  video?: string
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  tags: string[]
  tagsEn: string[]
}

export function createPost(id: string, content: PostContent, metadata: {
  date: string
  year: number
  bannerType: 1 | 2 | 3
  image: string
  video?: string
}): Post {
  return {
    id,
    title: content.pt.title,
    titleEn: content.en.title,
    date: metadata.date,
    year: metadata.year,
    bannerType: metadata.bannerType,
    image: metadata.image,
    video: metadata.video,
    excerpt: content.pt.excerpt,
    excerptEn: content.en.excerpt,
    content: content.pt.content,
    contentEn: content.en.content,
    tags: content.pt.tags,
    tagsEn: content.en.tags
  }
}

export const posts: Post[] = [
  pauEPedraPost
]

export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id)
}

export function getAllPosts(): Post[] {
  return posts
}

export function getFeaturedPosts(): Post[] {
  return posts.slice(0, 3)
} 
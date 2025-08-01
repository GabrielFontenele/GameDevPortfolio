import { computed } from 'vue'
import { getAllPosts, getPostById, type Post } from '../content/posts'

export function usePosts() {
  const posts = getAllPosts()

  const sortedPosts = computed(() => 
    [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  )

  const mainPosts = computed(() => sortedPosts.value.slice(0, 4))
  
  const remainingPosts = computed(() => sortedPosts.value.slice(4))

  const getPost = (id: string) => getPostById(id)

  const getPostsByYear = () => {
    const grouped: Record<number, Post[]> = {}
    posts.forEach(post => {
      if (!grouped[post.year]) {
        grouped[post.year] = []
      }
      grouped[post.year].push(post)
    })
    return grouped
  }

  return {
    posts,
    sortedPosts,
    mainPosts,
    remainingPosts,
    getPost,
    getPostsByYear
  }
} 
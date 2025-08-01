<script setup lang="ts">
import { onMounted } from 'vue'
import Banner from './Banner.vue'
import TagList from './ui/TagList.vue'
import { usePosts } from '../composables/usePosts'

const emit = defineEmits<{
  navigate: [page: string]
}>()

const { mainPosts, remainingPosts } = usePosts()

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    
    setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 200)
  }, 50)
})

const navigateToPost = (postId: string) => {
  emit('navigate', `blog-${postId}`)
}
</script>

<template>
  <div class="home-page">
          <div class="posts-section">
      <div class="posts-grid">
        <Banner 
          v-for="post in mainPosts" 
          :key="post.id"
          :post="post"
          @navigate="(page) => $emit('navigate', page)"
        />
      </div>
    </div>

    <div v-if="remainingPosts.length > 0" class="posts-list-section">
      <div class="posts-list-header">
        <div class="container">
          <h2 class="section-title">Todos os Posts</h2>
        </div>
      </div>
      <div class="posts-list">
        <div 
          v-for="post in remainingPosts" 
          :key="post.id"
          class="post-list-item"
          @click="navigateToPost(post.id)"
        >
          <div class="container">
            <div class="post-list-content">
              <div class="post-list-text">
                <h3 class="post-list-title">{{ post.title }}</h3>
                <p class="post-list-excerpt">{{ post.excerpt }}</p>
                <div class="post-list-meta">
                  <span class="post-list-date">
                    {{ new Date(post.date).toLocaleDateString('pt-BR') }}
                  </span>
                  <TagList :tags="post.tags" :max-display="3" :show-count="true" />
                </div>
              </div>
              <img v-if="post.image" :src="post.image" :alt="post.title" class="post-list-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
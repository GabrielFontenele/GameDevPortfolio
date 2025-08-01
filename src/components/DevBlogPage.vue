<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import TagList from './ui/TagList.vue'
import Button from './ui/Button.vue'
import PostContent from './ui/PostContent.vue'
import { useLanguage } from '../composables/useLanguage'
import { usePosts } from '../composables/usePosts'

interface Props {
  postId: string
}

const props = defineProps<Props>()


const { t } = useI18n()
const { getLocalizedContent } = useLanguage()
const { getPost } = usePosts()

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

const currentPost = computed(() => 
  getPost(props.postId)
)

const localizedPost = computed(() => {
  if (!currentPost.value) return null
  return getLocalizedContent(currentPost.value)
})
</script>

<template>
  <div v-if="currentPost && localizedPost" class="dev-blog-page">
    <div class="post-header">
      <div class="container">
        <h1 class="post-title">{{ localizedPost.title }}</h1>
        
        <div class="post-meta">
          <span class="post-date">
            {{ new Date(currentPost.date).toLocaleDateString('pt-BR') }}
          </span>
          <TagList :tags="localizedPost.tags" />
        </div>
      </div>
    </div>

    <div class="post-content container">
      <div v-if="currentPost.image || currentPost.video" class="post-media">
        <img v-if="currentPost.image" :src="currentPost.image" :alt="localizedPost.title" class="post-image" />
        <video v-else-if="currentPost.video" :src="currentPost.video" controls class="post-video">
          Seu navegador não suporta vídeos.
        </video>
      </div>

      <div class="post-body">
        <PostContent 
          :content="localizedPost.content" 
        />
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>{{ t('pages.blog.notFound') }}</h1>
      <p>{{ t('pages.blog.notFoundMessage') }}</p>
      <Button @click="$emit('navigate', 'home')" class="m-3xl">
        {{ t('buttons.backToHome') }}
      </Button>
    </div>
  </div>
</template> 
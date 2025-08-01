<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Post } from '../types/Post'
import TagList from './ui/TagList.vue'
import Button from './ui/Button.vue'
import { useLanguage } from '../composables/useLanguage'

interface Props {
  post: Post
}

const props = defineProps<Props>()

const emit = defineEmits<{
  navigate: [page: string]
}>()

const { t } = useI18n()
const { getLocalizedContent } = useLanguage()

const navigateToPost = () => {
  emit('navigate', `blog-${props.post.id}`)
}

const localizedPost = computed(() => getLocalizedContent(props.post))
</script>

<template>
  <div 
    class="banner" 
    :class="`banner-type${post.bannerType}`"
    :style="post.bannerType === 1 ? { backgroundImage: `url(${post.image})` } : {}"
  >
    <div class="banner-content container">
      <template v-if="post.bannerType === 1">
        <div class="banner-text">
          <h2 class="banner-title">{{ localizedPost.title }}</h2>
          <p class="banner-excerpt">{{ localizedPost.excerpt }}</p>
          <TagList :tags="localizedPost.tags" class="m-3xl" />
          <div class="banner-footer">
            <span class="banner-date">
              {{ new Date(post.date).toLocaleDateString('pt-BR') }}
            </span>
            <Button @click="navigateToPost">
              {{ t('buttons.readMore') }}
              <span class="arrow">→</span>
            </Button>
          </div>
        </div>
      </template>

      <template v-else-if="post.bannerType === 2">
        <div class="banner-text">
          <h2 class="banner-title">{{ localizedPost.title }}</h2>
          <p class="banner-excerpt">{{ localizedPost.excerpt }}</p>
          <TagList :tags="localizedPost.tags" class="m-3xl" />
          <div class="banner-footer">
            <span class="banner-date">
              {{ new Date(post.date).toLocaleDateString('pt-BR') }}
            </span>
            <Button @click="navigateToPost">
              {{ t('buttons.readMore') }}
              <span class="arrow">→</span>
            </Button>
          </div>
        </div>
        <div class="banner-image">
          <img :src="post.image" :alt="localizedPost.title" />
          <div class="image-overlay"></div>
        </div>
      </template>

      <template v-else-if="post.bannerType === 3">
        <div class="banner-header">
          <h2 class="banner-title">{{ localizedPost.title }}</h2>
        </div>
        
        <div v-if="post.video" class="banner-video">
          <video :src="post.video" controls>
            Seu navegador não suporta vídeos.
          </video>
        </div>
        
        <div class="banner-info">
          <div class="info-content">
            <p class="banner-excerpt">{{ localizedPost.excerpt }}</p>
            <TagList :tags="localizedPost.tags" class="m-3xl" />
          </div>
          <div class="info-footer">
            <span class="banner-date">
              {{ new Date(post.date).toLocaleDateString('pt-BR') }}
            </span>
            <Button @click="navigateToPost">
              {{ t('buttons.readMore') }}
              <span class="arrow">→</span>
            </Button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template> 
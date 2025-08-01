<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  tags: string[]
  maxDisplay?: number
  showCount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  maxDisplay: 3,
  showCount: false
})

const displayTags = computed(() => {
  if (props.tags.length <= props.maxDisplay) {
    return props.tags
  }
  return props.tags.slice(0, props.maxDisplay)
})

const remainingCount = computed(() => {
  if (props.tags.length <= props.maxDisplay) {
    return 0
  }
  return props.tags.length - props.maxDisplay
})
</script>

<template>
  <div class="tag-list">
    <span v-for="tag in displayTags" :key="tag" class="tag">
      {{ tag }}
    </span>
    <span v-if="remainingCount > 0 && showCount" class="tag tag-more">
      +{{ remainingCount }}
    </span>
  </div>
</template>

<style scoped>
.tag-more {
  background: rgba(255, 255, 255, 0.05);
  opacity: 0.7;
}
</style> 
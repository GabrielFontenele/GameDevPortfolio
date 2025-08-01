<script setup lang="ts">
interface Props {
  content: string
}

const props = defineProps<Props>()

</script>

<template>
  <div class="post-content-renderer" v-html="props.content"></div>
</template>

<style scoped>
.post-content-renderer {
  line-height: 1.7;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
}

.post-content-renderer :deep(h2) {
  font-size: var(--font-size-4xl);
  font-weight: bold;
  margin: var(--spacing-4xl) 0 var(--spacing-2xl);
  color: var(--color-secondary);
}

.post-content-renderer :deep(h3) {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  margin: var(--spacing-3xl) 0 var(--spacing-xl);
  color: var(--color-secondary);
}

.post-content-renderer :deep(h4) {
  font-size: var(--font-size-xl);
  font-weight: bold;
  margin: var(--spacing-2xl) 0 var(--spacing-lg);
  color: var(--color-secondary);
}

.post-content-renderer :deep(p) {
  margin-bottom: var(--spacing-2xl);
}

.post-content-renderer :deep(.content-image-wrapper) {
  margin: var(--spacing-4xl) 0;
  text-align: center;
}

.post-content-renderer :deep(.content-image),
.post-content-renderer :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.post-content-renderer :deep(.image-caption) {
  font-size: var(--font-size-base);
  color: var(--color-secondary);
  font-weight: 400;
  text-align: center;
  margin-bottom: var(--spacing-sm);
  opacity: 0.7;
  letter-spacing: 0.5px;
}

.post-content-renderer :deep(.content-images-side-by-side),
.post-content-renderer :deep(.image-comparison) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin: var(--spacing-4xl) 0;
  align-items: start;
}

.post-content-renderer :deep(.content-images-side-by-side .content-image-wrapper),
.post-content-renderer :deep(.image-comparison .content-image-wrapper) {
  margin: 0;
}

.post-content-renderer :deep(.content-images-side-by-side .content-image),
.post-content-renderer :deep(.image-comparison img) {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16/9;
  height: auto;
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
}

.post-content-renderer :deep(video) {
  width: 100%;
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin: var(--spacing-4xl) 0;
  display: block;
}



@media (max-width: 768px) {
  .post-content-renderer {
    font-size: var(--font-size-base);
    padding: 0 var(--spacing-lg);
  }
  
  .post-content-renderer :deep(h2) {
    font-size: var(--font-size-3xl);
    margin: var(--spacing-3xl) 0 var(--spacing-xl);
  }
  
  .post-content-renderer :deep(h3) {
    font-size: var(--font-size-2xl);
    margin: var(--spacing-2xl) 0 var(--spacing-lg);
  }
  
  .post-content-renderer :deep(h4) {
    font-size: var(--font-size-lg);
    margin: var(--spacing-xl) 0 var(--spacing-md);
  }
  
  .post-content-renderer :deep(p) {
    margin-bottom: var(--spacing-xl);
  }
  
  .post-content-renderer :deep(.content-image-wrapper) {
    margin: var(--spacing-3xl) 0;
  }
  
  .post-content-renderer :deep(.content-images-side-by-side),
  .post-content-renderer :deep(.image-comparison) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    margin: var(--spacing-3xl) 0;
  }
  
  .post-content-renderer :deep(.content-images-side-by-side .content-image),
  .post-content-renderer :deep(.image-comparison img) {
    max-width: 100%;
    aspect-ratio: 16/9;
  }
  
  .post-content-renderer :deep(.image-caption) {
    font-size: var(--font-size-base);
  }
  
  .post-content-renderer :deep(video) {
    margin: var(--spacing-3xl) 0;
  }
}

@media (max-width: 480px) {
  .post-content-renderer {
    padding: 0 var(--spacing-md);
  }
  
  .post-content-renderer :deep(h2) {
    font-size: var(--font-size-2xl);
    margin: var(--spacing-2xl) 0 var(--spacing-lg);
  }
  
  .post-content-renderer :deep(h3) {
    font-size: var(--font-size-xl);
    margin: var(--spacing-xl) 0 var(--spacing-md);
  }
  
  .post-content-renderer :deep(h4) {
    font-size: var(--font-size-base);
    margin: var(--spacing-lg) 0 var(--spacing-sm);
  }
  
  .post-content-renderer :deep(p) {
    margin-bottom: var(--spacing-lg);
  }
  
  .post-content-renderer :deep(.content-image-wrapper) {
    margin: var(--spacing-2xl) 0;
  }
  
  .post-content-renderer :deep(.content-images-side-by-side),
  .post-content-renderer :deep(.image-comparison) {
    gap: var(--spacing-lg);
    margin: var(--spacing-2xl) 0;
  }
  
  .post-content-renderer :deep(video) {
    margin: var(--spacing-2xl) 0;
  }
}
</style> 
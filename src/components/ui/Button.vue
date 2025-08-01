<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'sm',
  fullWidth: false,
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button 
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-full': fullWidth, 'btn-disabled': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background: var(--color-border);
  color: var(--color-primary);
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-lg);
  transition: background var(--transition-fast);
}

.btn:hover:not(.btn-disabled) {
  background: #444;
}

.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

.btn-sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-base);
}

.btn-md {
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-3xl);
  font-size: var(--font-size-xl);
}
</style> 
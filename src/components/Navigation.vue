<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguage } from '../composables/useLanguage'
import { usePosts } from '../composables/usePosts'

interface Props {
  currentPage: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  navigate: [page: string]
}>()

const { t } = useI18n()
const { currentLanguage, toggleLanguage, getLocalizedContent, initLanguage } = useLanguage()

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const dropdownTimeout = ref<number | null>(null)

onMounted(() => {
  initLanguage()
})

const { getPostsByYear } = usePosts()
const postsByYear = computed(() => getPostsByYear())

const navigateTo = (page: string) => {
  emit('navigate', page)
  isMenuOpen.value = false
  isDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
  }
  dropdownTimeout.value = window.setTimeout(() => {
    isDropdownOpen.value = false
  }, 150)
}

const openDropdown = () => {
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
    dropdownTimeout.value = null
  }
  isDropdownOpen.value = true
}

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <button class="brand-text" @click="navigateTo('home')">
          GameDev Portfolio
        </button>
      </div>

      <div class="nav-menu">
        <div class="dropdown">
          <button 
            class="dropdown-toggle" 
            :class="{ active: props.currentPage.startsWith('blog-') }"
            @click="toggleDropdown"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            {{ t('nav.blog') }}
            <span class="dropdown-arrow" :class="{ open: isDropdownOpen }">▼</span>
          </button>
          
          <div 
            class="dropdown-menu" 
            :class="{ open: isDropdownOpen }"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            <div v-for="year in Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a))" :key="year" class="year-group">
              <div class="year-header">{{ year }}</div>
              <div class="year-posts">
                <button 
                  v-for="post in postsByYear[parseInt(year)]" 
                  :key="post.id"
                  class="post-link"
                  :class="{ active: props.currentPage === `blog-${post.id}` }"
                  @click="navigateTo(`blog-${post.id}`)"
                >
                  {{ getLocalizedContent(post).title }}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          class="nav-item" 
          :class="{ active: props.currentPage === 'contact' }"
          @click="navigateTo('contact')"
        >
          {{ t('nav.contact') }}
        </button>
        
        <button 
          class="nav-item language-toggle"
          @click="toggleLanguage"
          :title="currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'"
        >
          {{ t('buttons.changeLanguage') }}
        </button>
      </div>

      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <div class="mobile-blog-section">
        <div class="mobile-blog-header">{{ t('nav.blog') }}</div>
        <div v-for="year in Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a))" :key="year" class="mobile-year-group">
          <div class="mobile-year-header">{{ year }}</div>
          <button 
            v-for="post in postsByYear[parseInt(year)]" 
            :key="post.id"
            class="mobile-post-link"
            :class="{ active: props.currentPage === `blog-${post.id}` }"
            @click="navigateTo(`blog-${post.id}`)"
          >
            {{ getLocalizedContent(post).title }}
          </button>
        </div>
      </div>
      
      <button 
        class="mobile-nav-item" 
        :class="{ active: props.currentPage === 'contact' }"
        @click="navigateTo('contact')"
      >
        {{ t('nav.contact') }}
      </button>
      
      <button 
        class="mobile-nav-item language-toggle"
        @click="toggleLanguage"
      >
        {{ t('buttons.changeLanguage') }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.nav-container {
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
}

.nav-brand {
  flex: 0 1 auto;
}

.brand-text {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
  transition: color var(--transition-fast);
  background: none;
  border: none;
}

.brand-text:hover {
  color: var(--color-secondary);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.nav-item {
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
  font-weight: 500;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-secondary);
}

.language-toggle {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  min-width: 40px;
  text-align: center;
}

.language-toggle:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dropdown-toggle.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
  font-weight: 500;
}

.dropdown-toggle.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-secondary);
}

.dropdown-arrow {
  font-size: var(--font-size-sm);
  transition: transform var(--transition-fast);
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  min-width: 300px;
  max-height: 400px;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-fast);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  margin-top: -1px;
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.year-group {
  border-bottom: 1px solid var(--color-border);
}

.year-group:last-child {
  border-bottom: none;
}

.year-header {
  padding: var(--spacing-sm) var(--spacing-md);
  background: #2d2d2d;
  font-weight: 600;
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
}

.year-posts {
  padding: 5px 0;
}

.post-link {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: background var(--transition-fast);
  font-size: var(--font-size-base);
}

.post-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.post-link.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
  font-weight: 500;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-primary);
  margin: 3px 0;
  transition: var(--transition-fast);
  border-radius: 2px;
}

.mobile-menu {
  display: none;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-xl);
}

.mobile-menu.open {
  display: block;
}

.mobile-nav-item {
  display: block;
  width: 100%;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.mobile-nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-nav-item.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
  font-weight: 500;
}

.mobile-blog-section {
  margin: var(--spacing-xl) 0;
}

.mobile-blog-header {
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.mobile-year-group {
  margin: var(--spacing-lg) 0;
}

.mobile-year-header {
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.mobile-post-link {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: var(--color-primary);
  padding: var(--spacing-sm) 0;
  cursor: pointer;
  transition: background var(--transition-fast);
  font-size: var(--font-size-base);
  border-bottom: 1px solid var(--color-border);
}

.mobile-post-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-post-link.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-secondary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .nav-menu {
    gap: var(--spacing-sm);
  }
  
  .nav-item, .dropdown-toggle {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-container {
    padding: 0 var(--spacing-xl);
    width: 100%;
    max-width: none;
    margin: 0;
  }
  
  .brand-text {
    font-size: var(--font-size-xl);
  }
}
</style> 
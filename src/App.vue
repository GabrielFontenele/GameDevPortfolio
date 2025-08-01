<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import DevBlogPage from './components/DevBlogPage.vue'
import { useLanguage } from './composables/useLanguage'
import { useNavigation } from './composables/useNavigation'

import './styles/globals.css'
import './styles/components.css'

const { currentPage, navigateTo, getComponentKey } = useNavigation()
const { initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div id="app">
    <Navigation 
      :current-page="currentPage" 
      @navigate="navigateTo" 
    />
    
    <main class="main-content">
      <HomePage 
        v-if="currentPage === 'home'" 
        :key="getComponentKey('home')"
        @navigate="navigateTo"
      />
      <ContactPage 
        v-else-if="currentPage === 'contact'" 
        :key="getComponentKey('contact')"
      />
      <DevBlogPage 
        v-else-if="currentPage.startsWith('blog-')" 
        :post-id="currentPage.replace('blog-', '')" 
        :key="getComponentKey(`blog-${currentPage.replace('blog-', '')}`)"
        @navigate="navigateTo"
      />
    </main>
  </div>
</template>

<style>
.main-content {
  flex: 1;
  padding: 0;
  width: 100%;
  margin-top: 60px;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 60px;
    padding: 0;
    width: 100%;
  }
}
</style>

import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()
  
  const currentLanguage = ref(locale.value || 'pt')
  
  watch(locale, (newLocale) => {
    currentLanguage.value = newLocale
  })
  
  const isPortuguese = computed(() => currentLanguage.value === 'pt')
  
  const isEnglish = computed(() => currentLanguage.value === 'en')
  
  const toggleLanguage = () => {
    const newLanguage = currentLanguage.value === 'pt' ? 'en' : 'pt'
    currentLanguage.value = newLanguage
    locale.value = newLanguage
    
    localStorage.setItem('language', newLanguage)
  }
  
  const setLanguage = (lang: 'pt' | 'en') => {
    currentLanguage.value = lang
    locale.value = lang
    localStorage.setItem('language', lang)
  }
  
  const getLocalizedContent = (post: any) => {
    if (isEnglish.value) {
      return {
        title: post.titleEn || post.title,
        excerpt: post.excerptEn || post.excerpt,
        content: post.contentEn || post.content,
        tags: post.tagsEn || post.tags
      }
    }
    
    return {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags
    }
  }
  
  const initLanguage = () => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage as 'pt' | 'en')
    }
  }
  
  return {
    currentLanguage,
    isPortuguese,
    isEnglish,
    toggleLanguage,
    setLanguage,
    getLocalizedContent,
    initLanguage
  }
} 
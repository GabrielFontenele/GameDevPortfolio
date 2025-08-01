import { ref } from 'vue'

export function useNavigation() {
  const currentPage = ref('home')
  const componentKey = ref(0)

  const navigateTo = (page: string) => {
    currentPage.value = page
    componentKey.value++
  }

  const getComponentKey = (suffix: string) => `${suffix}-${componentKey.value}`

  return {
    currentPage,
    navigateTo,
    getComponentKey
  }
} 
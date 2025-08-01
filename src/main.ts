import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './styles/globals.css'
import './styles/components.css'

createApp(App)
  .use(i18n)
  .mount('#app')

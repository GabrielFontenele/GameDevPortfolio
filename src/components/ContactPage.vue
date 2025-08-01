<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
</script>

<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title">{{ t('pages.contact.info.email') }}</h2>
          
          <div class="info-grid">
            <div class="info-card card">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3 class="text-xl font-bold">{{ t('pages.contact.form.email') }}</h3>
                <a href="mailto:gabrielfonteneledeazevedo@gmail.com" class="social-link">gabrielfonteneledeazevedo@gmail.com</a>
              </div>
            </div>
            
            <div class="info-card card">
              <div class="info-icon">💼</div>
              <div class="info-content">
                <h3 class="text-xl font-bold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gabriel-fontenele-de-azevedo/" target="_blank" class="social-link">linkedin.com/in/gabriel-fontenele-de-azevedo</a>
              </div>
            </div>
            
            <div class="info-card card">
              <div class="info-icon">🎓</div>
              <div class="info-content">
                <h3 class="text-xl font-bold">{{ t('pages.contact.certificate.title') }}</h3>
                <a href="https://lms.ebaconline.com.br/certs/validate/02949-16467-97522-15069" target="_blank" class="social-link">{{ t('pages.contact.certificate.description') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
import { createI18n } from 'vue-i18n'

const pt = {
  nav: {
    home: 'Início',
    blog: 'Blog',
    contact: 'Contato'
  },
  
  buttons: {
    readMore: 'Ler mais',
    backToHome: 'Voltar para Home',
    send: 'Enviar',
    changeLanguage: 'EN'
  },
  
  pages: {
    home: {
      title: 'Portfólio de Game Dev',
      subtitle: 'Desenvolvimento de jogos e experiências interativas'
    },
    contact: {
      form: {
        name: 'Nome',
        email: 'E-Mail',
        message: 'Mensagem',
        send: 'Enviar mensagem'
      },
      info: {
        email: 'Informações',
        location: 'Localização',
        social: 'Redes Sociais'
      },
      certificate: {
        title: 'Certificado EBAC',
        description: 'Certificado de Desenvolvimento de Jogos'
      }
    },
    blog: {
      notFound: 'Post não encontrado',
      notFoundMessage: 'O post que você está procurando não existe.'
    }
  },
  
  meta: {
    date: 'Data',
    tags: 'Tags'
  }
}

const en = {
  nav: {
    home: 'Home',
    blog: 'Blog',
    contact: 'Contact'
  },
  
  buttons: {
    readMore: 'Read more',
    backToHome: 'Back to Home',
    send: 'Send',
    changeLanguage: 'PT'
  },
  
  pages: {
    home: {
      title: 'Game Dev Portfolio',
      subtitle: 'Game development and interactive experiences'
    },
    contact: {
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Message',
        send: 'Send message'
      },
      info: {
        email: 'Information',
        location: 'Location',
        social: 'Social Media'
      },
      certificate: {
        title: 'EBAC Certificate',
        description: 'Game Development Certificate'
      }
    },
    blog: {
      notFound: 'Post not found',
      notFoundMessage: 'The post you are looking for does not exist.'
    }
  },
  
  meta: {
    date: 'Date',
    tags: 'Tags'
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt,
    en
  }
})

export default i18n 
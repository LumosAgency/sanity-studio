// schemas/faq.js
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import image from './blocks/image'

export default {
  name: 'faqs',
  type: 'document',
  title: 'Faqs',
  fields: [
    {
      ...image,
      name: 'faqsImage',
      title: 'FAQ Page Icon',
    },
    {
      name: 'faqsTitle',
      type: 'string',
      title: 'FAQ Page Title',
    },
    {
      ...blockContent,
      name: 'faqIntro',
      title: 'FAQ Intro Text',
    },
    {
      ...accordion,
      name: 'faqContent',
    },
  ],
}

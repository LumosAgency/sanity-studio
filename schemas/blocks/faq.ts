// schemas/faq.js
import {UnknownIcon} from '@sanity/icons'
import blockContent from './blockContent'
import image from './image'

export default {
  name: 'FAQ',
  type: 'document',
  title: 'FAQ',
  icon: UnknownIcon,
  fields: [
    {
      name: 'faqTitle',
      type: 'string',
      title: 'FAQ Title',
    },
    {
      title: 'Content',
      name: 'faqContent',
      type: 'array',
      of: [blockContent, image],
    },
  ],
}

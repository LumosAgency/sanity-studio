// schemas/resourcePages.ts
import blockContent from './blocks/blockContent'
import faq from './blocks/faq'
import image from './blocks/image'
import quote from './blocks/quote'
import table from './blocks/table'
import textContent from './blocks/textContent'
export default {
  name: 'resourcePages',
  type: 'document', // change this to 'object'
  title: 'Resource Page',
  fields: [
    {
      ...image,
      name: 'resourcesImage',
      title: 'Resource Icon',
    },
    {
      name: 'resourcesTitle',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'resourcesIntro',
      title: 'Intro Text',
      type: 'text',
    },
    {
      title: 'Content Section',
      name: 'resourcesPages',
      type: 'array',
      of: [blockContent, image, textContent, quote, faq, table],
    },
  ],
  preview: {
    select: {
      title: 'resourcesTitle',
    },
  },
}

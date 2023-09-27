// schemas/resourcePages.ts
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import quote from './blocks/quote'
import tableField from './blocks/table'
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
      of: [blockContent, image, textContent, quote, accordion, tableField],
    },
  ],
  preview: {
    select: {
      title: 'resourcesTitle',
    },
  },
}

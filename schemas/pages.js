// schemas/pages.ts
import {DocumentWordIcon} from '@sanity/icons'
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import quote from './blocks/quote'
import tableField from './blocks/table'
import textContent from './blocks/textContent'

export default {
  name: 'pages',
  type: 'document', // change this to 'object'
  title: 'Pages',
  icon: DocumentWordIcon,
  fields: [
    {
      ...image,
      name: 'pageImage',
      title: 'Page Icon',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageIntro',
      title: 'Intro Text',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'pageContent',
      type: 'array',
      of: [blockContent, image, textContent, quote, accordion, tableField],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
  ],
  preview: {
    select: {
      title: 'title',
      iconRef: 'pageImage.asset', // This is the key update
    },
    prepare(selection) {
      const {title, iconRef} = selection
      return {
        title: title,
        media: iconRef,
      }
    },
  },
}

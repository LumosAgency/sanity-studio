// schemas/pages.ts
import {DocumentWordIcon} from '@sanity/icons'
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import divider from './blocks/divider'
import image from './blocks/image'
import quote from './blocks/quote'
import tableField from './blocks/table'
import textContent from './blocks/textContent'
import siteMeta from './global/siteMeta'

export default {
  name: 'pages',
  type: 'document', // change this to 'object'
  title: 'Pages',
  icon: DocumentWordIcon,
  groups: [
    {
      name: 'meta',
      title: 'Page Meta',
    },
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {...siteMeta, title: 'Meta Data', group: ['meta']},
    {
      ...image,
      name: 'pageImage',
      title: 'Page Icon',
      group: ['content'],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: ['content'],
    },
    {
      name: 'pageIntro',
      title: 'Intro Text',
      type: 'text',
      group: ['content'],
    },
    {
      title: 'Content',
      name: 'pageContent',
      type: 'array',
      of: [blockContent, image, textContent, quote, accordion, tableField, divider],
      group: ['content'],
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

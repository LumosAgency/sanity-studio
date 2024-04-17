// schemas/resourcePages.ts
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import quote from './blocks/quote'
import tableField from './blocks/table'
import textContent from './blocks/textContent'
import siteMeta from './global/siteMeta'

export default {
  name: 'blog',
  type: 'document', // change this to 'object'
  title: 'Blog Posts',
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
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: ['content'],
    },
    {
      name: 'blogFeaturedImage',
      title: 'Featured Image',
      type: 'image',
      group: ['content'],
    },
    {
      name: 'blogIntro',
      title: 'Intro Text',
      type: 'text',
      group: ['content'],
    },
    {
      title: 'Content Section',
      name: 'blogContent',
      type: 'array',
      of: [blockContent, image, textContent, quote, accordion, tableField],
      group: ['content'],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

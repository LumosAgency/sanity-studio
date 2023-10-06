// schemas/global/calculator/email.js
import siteMeta from '../siteMeta'
export default {
  name: 'globalCalculatorEmail',
  type: 'object',
  title: 'Email',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
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
      name: 'emailTitle',
      type: 'string',
      title: 'Email: Title',
      group: ['content'],
    },
    {
      title: ' Email: Content',
      name: 'emailContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

// schemas/global/calculator/phone.js
import siteMeta from '../siteMeta'
export default {
  name: 'globalCalculatorPhone',
  type: 'object',
  title: 'Phone',
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
      name: 'phoneTitle',
      type: 'string',
      title: 'Phone: Title',
      group: ['content'],
    },
    {
      title: ' Phone: Content',
      name: 'phoneContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

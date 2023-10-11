// schemas/global/calculator/name.js
import siteMeta from '../siteMeta'
export default {
  name: 'globalCalculatorStart',
  type: 'object',
  title: 'Start',
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
      name: 'startTitle',
      type: 'string',
      title: 'Name: Title',
      group: ['content'],
    },
    {
      title: ' Start: Content',
      name: 'startContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

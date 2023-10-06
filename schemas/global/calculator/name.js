// schemas/global/calculator/name.js
import siteMeta from '../siteMeta'
export default {
  name: 'globalCalculatorName',
  type: 'object',
  title: 'Name',
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
      name: 'nameTitle',
      type: 'string',
      title: 'Name: Title',
      group: ['content'],
    },
    {
      title: ' Name: Content',
      name: 'nameContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

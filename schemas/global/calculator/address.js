import siteMeta from '../siteMeta'
// schemas/global/calculator/address.js
export default {
  name: 'globalCalculatorAddress',
  type: 'object',
  title: 'Address',
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
      name: 'addressTitle',
      type: 'string',
      title: 'Address: Title',
      group: ['content'],
    },
    {
      title: ' Address: Content',
      name: 'addressContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

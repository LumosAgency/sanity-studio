// schemas/global/calculator/bill.js
import siteMeta from '../siteMeta'
export default {
  name: 'globalCalculatorBill',
  type: 'object',
  title: 'Bill',
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
      name: 'billTitle',
      type: 'string',
      title: 'Bill: Title',
      group: ['content'],
    },
    {
      title: ' Bill: Content',
      name: 'billContent',
      type: 'array',
      of: [{type: 'block'}],
      group: ['content'],
    },
  ],
}

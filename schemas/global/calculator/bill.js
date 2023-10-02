// schemas/global/calculator/bill.js
export default {
  name: 'globalCalculatorBill',
  type: 'object',
  title: 'Bill',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'billTitle',
      type: 'string',
      title: 'Bill: Title',
    },
    {
      title: ' Bill: Content',
      name: 'billContent',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

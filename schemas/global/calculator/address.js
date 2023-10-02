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
  fields: [
    {
      name: 'addressTitle',
      type: 'string',
      title: 'Address: Title',
    },
    {
      title: ' Address: Content',
      name: 'addressContent',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

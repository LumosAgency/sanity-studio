// schemas/global/calculator/name.js
export default {
  name: 'globalCalculatorName',
  type: 'object',
  title: 'Name',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'nameTitle',
      type: 'string',
      title: 'Name: Title',
    },
    {
      title: ' Name: Content',
      name: 'nameContent',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

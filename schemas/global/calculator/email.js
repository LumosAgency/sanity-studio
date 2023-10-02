// schemas/global/calculator/email.js
export default {
  name: 'globalCalculatorEmail',
  type: 'object',
  title: 'Email',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'emailTitle',
      type: 'string',
      title: 'Email: Title',
    },
    {
      title: ' Email: Content',
      name: 'emailContent',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

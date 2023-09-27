// schemas/table.js
export default {
  name: 'table',
  type: 'object',
  title: 'Table',
  fields: [
    {
      name: 'tableField',
      type: 'table', // Use 'table' as a type string
      title: 'Table',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Table',
    }),
  },
}

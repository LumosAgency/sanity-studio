// schemas/table.js
export default {
  name: 'tableField',
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

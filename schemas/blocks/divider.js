// schemas/blocks/divider.js
export default {
  name: 'divider',
  type: 'object',
  title: 'Divider',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      hidden: true,
      initialValue: 'Divider',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: '------- Divider -------',
      }
    },
  },
}

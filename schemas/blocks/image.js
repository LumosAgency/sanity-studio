// schemas/image.js
export default {
  name: 'image',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'width',
      description: 'Width of image in PX',
      type: 'number',
    },
    {
      name: 'height',
      description: 'Height of image in PX',
      type: 'number',
    },
  ],
}

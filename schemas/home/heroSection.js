// schemas/home/hero.js
export default {
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'heroTitle', type: 'string', title: 'Hero Title'},
    {name: 'heroSubtitle', type: 'string', title: 'Hero Subtitle'},
  ],
}

import image from '../blocks/image'
export default {
  type: 'document',
  name: 'siteMeta',
  title: 'Site Configuration',
  fieldsets: [{name: 'google', title: 'Google Analytics'}],
  fields: [
    {
      type: 'string',
      title: 'Page Title',
      name: 'ogTitle',
      description:
        'Set the title Open Graph should use if you want a different SEO title than the document title. If a title is not chosen, the document title will be used.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
    },
    {
      ...image,
      name: 'ogImage',
      description:
        'URL of the image that should be used in social media previews. If not chosen, the sites Default Social Media Image will be used.',
    },
  ],
  options: {
    collapsible: false,
    collapsed: false,
    columns: 1,
  },
}

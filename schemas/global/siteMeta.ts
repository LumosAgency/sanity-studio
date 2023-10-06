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
        'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
      validation: (Rule: Rule) => Rule.required(),
      // fieldset: "basic"
    },
    {
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
    },
    {
      type: 'text',
      name: 'description',
      title: 'Describe This Site',
    },
  ],
  options: {
    collapsible: false,
    collapsed: false,
    columns: 1,
  },
}

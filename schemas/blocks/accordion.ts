// schemas/accordion.ts
import accordianItem from './accordionItem'
export default {
  name: 'accordion',
  type: 'object', // change this to 'object'
  title: 'Accordion',
  fields: [
    {
      name: 'accordionTitle',
      title: 'Accordion Title',
      type: 'string',
    },
    {
      name: 'accordionSubTitle',
      title: 'Accordion Sub-title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'faqContent',
      type: 'array',
      of: [accordianItem],
    },
  ],
  preview: {
    select: {
      title: 'accordionTitle',
    },
    prepare(selection) {
      const {title} = selection
      let fallbackText
      if (!title) {
        fallbackText = 'Accordion'
      }
      return {
        title: title || fallbackText,
      }
    },
  },
}

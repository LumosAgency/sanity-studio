// schemas/accordionItem.js
import blockContent from './blockContent'

export default {
  name: 'accordionItem',
  type: 'document',
  title: 'Accordion Item',
  fields: [
    {
      name: 'accordionItemTitle',
      type: 'string',
      title: 'Title',
    },
    {
      ...blockContent,
      name: 'accordionItemContent',
    },
  ],
}

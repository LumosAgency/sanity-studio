// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'

export default {
  name: 'lowestPriceCards',
  type: 'object',
  title: 'Lowest Price Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'lowestPriceCardTitle', type: 'string', title: 'Section Title'},
    {
      ...blockContent,
      name: 'card_1',
      title: 'Card #1 Content',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      ...blockContent,
      name: 'card_2',
      title: 'Card #2 Content',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      ...blockContent,
      name: 'card_3',
      title: 'Card #3 Content',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
}

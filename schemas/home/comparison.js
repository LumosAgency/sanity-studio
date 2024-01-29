// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import textContent from '../blocks/textContent'

export default {
  name: 'comparison',
  type: 'object',
  title: 'Comparison Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'comparisonTitle', type: 'string', title: 'Comparison Section Title'},
    {
      ...blockContent,
      name: 'comparisonIntro',
      title: 'Comparison Section Intro Text',
    },
    {
      title: 'Competitor',
      name: 'competitor',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {
          name: 'content',
          type: 'array',
          of: [textContent],
        },
        {name: 'price', type: 'string', title: 'Price'},
        {name: 'disclaimer', type: 'string', title: 'Disclaimer'},
      ],
    },
    {
      title: 'Energi Antelope',
      name: 'energiAntelope',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {
          name: 'content',
          type: 'array',
          of: [textContent],
        },
        {name: 'price', type: 'string', title: 'Price'},
        {name: 'disclaimer', type: 'string', title: 'Disclaimer'},
      ],
    },
  ],
}

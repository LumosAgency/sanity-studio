// schemas/home/lowestPrice.js
import card from '../blocks/card'

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
      title: 'Star Items',
      name: 'starItems', // Change the field name
      type: 'array', // Change the field type to array
      of: [card],
    },
  ],
}

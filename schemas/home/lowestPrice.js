// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import card from '../blocks/card'
import image from '../blocks/image'

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
      name: 'lowestPriceCardSubtitle',
      title: 'Section Content',
    },
    {
      title: 'Star Items',
      name: 'starItems', // Change the field name
      type: 'array', // Change the field type to array
      of: [card],
    },
    {
      ...image,
      title: 'Below Content Image',
      name: 'lowestPriceBelowImage',
    },
  ],
}

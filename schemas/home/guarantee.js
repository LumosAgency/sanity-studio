// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import image from '../blocks/image'
import textContent from '../blocks/textContent'

export default {
  name: 'guarantee',
  type: 'object',
  title: 'Guarantee Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'guaranteeTitle', type: 'string', title: 'Guarantee Section Title'},
    {
      ...blockContent,
      name: 'guaranteeIntro',
      title: 'guarantee Section Intro Text',
    },
    {
      title: 'Star Items',
      name: 'starItems', // Change the field name
      type: 'array', // Change the field type to array
      of: [blockContent],
    },
    {
      ...image,
      title: 'Guarantee Section Image',
      name: 'guaranteeImage',
    },
  ],
}

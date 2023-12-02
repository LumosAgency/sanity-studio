// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import image from '../blocks/image'

export default {
  name: 'partners',
  type: 'object',
  title: 'Partners Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'partnersPreTitle', type: 'string', title: 'Partners Pre-title'},
    {name: 'partnersTitle', type: 'string', title: 'Partners Section Title'},
    {
      ...blockContent,
      name: 'partnersIntro',
      title: 'partners Section Intro Text',
    },
    {
      title: 'Partners Section Images',
      name: 'partnersImages',
      type: 'array',
      of: [image],
    },
  ],
}

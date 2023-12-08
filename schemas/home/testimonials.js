// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import quote from '../blocks/quote'

export default {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'testimonialsTitle', type: 'string', title: 'Testimonials Section Title'},
    {
      ...blockContent,
      name: 'testimonialsIntro',
      title: 'Testimonials Section Intro Text',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [quote],
    },
  ],
}

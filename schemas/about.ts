// schemas/about.js
import {BillIcon} from '@sanity/icons'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import quote from './blocks/quote'
import textContent from './blocks/textContent'

export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
  icon: BillIcon,
  fields: [
    {
      ...image,
      name: 'aboutImage',
      title: 'About Page Icon',
    },
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'About Page Title',
    },
    {
      title: 'Content',
      name: 'aboutContent',
      type: 'array',
      of: [blockContent, image, textContent, quote],
    },
  ],
}

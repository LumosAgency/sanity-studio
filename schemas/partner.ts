// schemas/partner.js
import {BillIcon} from '@sanity/icons'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import textContent from './blocks/textContent'

export default {
  name: 'partnerpartn',
  type: 'document',
  title: 'Partner Page',
  icon: BillIcon,
  fields: [
    {
      ...image,
      name: 'partnerImage',
      title: 'Partner Page Icon',
    },
    {
      name: 'partnerTitle',
      type: 'string',
      title: 'Partner Page Title',
    },
    {
      ...blockContent,
      name: 'partnerIntro',
      title: 'Partner Area Intro Text',
    },
    {
      title: 'Content',
      name: 'partnerContent',
      type: 'array',
      of: [blockContent, image, textContent],
    },
  ],
}

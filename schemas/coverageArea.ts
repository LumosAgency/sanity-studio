// schemas/coverage.js
import {BillIcon} from '@sanity/icons'
import accordion from './blocks/accordion'
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import quote from './blocks/quote'

export default {
  name: 'coverageArea',
  type: 'document',
  title: 'Coverage Page',
  icon: BillIcon,
  fields: [
    {
      ...image,
      name: 'coverageImage',
      title: 'Coverage Page Icon',
    },
    {
      name: 'coverageTitle',
      type: 'string',
      title: 'Coverage Page Title',
    },
    {
      ...blockContent,
      name: 'coverageIntro',
      title: 'Coverage Area Intro Text',
    },
    {
      title: 'Content',
      name: 'coverageContent',
      type: 'array',
      of: [blockContent, image, quote, accordion],
    },
  ],
}

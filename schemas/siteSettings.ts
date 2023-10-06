// schemas/siteSettings.ts
import alertBar from './global/alertBar'
import calculator from './global/calculator'

import image from './blocks/image'
export default {
  name: 'siteSettings',
  title: 'Glboal Site Settings',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Site Meta',
      default: true,
    },
    {
      name: 'alert',
      title: 'Alert Bar',
    },
    {
      name: 'calculator',
      title: 'Calculator Page Content',
    },
  ],
  fields: [
    {...alertBar, group: ['alert']},
    {...calculator, group: ['calculator']},
    {
      type: 'text',
      name: 'ogDefaultDescription',
      title: 'Default Social Share Description',
      description: 'If no social share description is chosen, this will be used',
      group: ['meta'],
    },
    {
      ...image,
      name: 'ogDefaultImage',
      description: 'This is the default social media image if no social media image is chosen',
      group: ['meta'],
    },
  ],
}

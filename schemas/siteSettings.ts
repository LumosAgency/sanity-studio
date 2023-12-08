// schemas/siteSettings.ts
import alertBar from './global/alertBar'
import calculator from './global/calculator'
import social from './global/social'

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
      name: 'social',
      title: 'Social Media',
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
    {...social, group: ['social']},
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
  preview: {
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
}

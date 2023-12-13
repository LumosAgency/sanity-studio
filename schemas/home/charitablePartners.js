// schemas/home/charitablePartners.js
import blockContent from '../blocks/blockContent'
import image from '../blocks/image'

export default {
  name: 'charitablePartners',
  type: 'object',
  title: 'Charitible Partners Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'charitablePartnersTitle',
      title: 'Charitible Partners Title',
      type: 'string',
    },
    {
      ...blockContent,
      name: 'charitablePartnersSubtitle',
      title: 'Charitible Partners Subtitle',
    },
    {
      ...image,
      name: 'image_1',
    },
    {
      ...image,
      name: 'image_2',
    },
    {
      ...image,
      name: 'image_3',
    },
    {
      ...image,
      name: 'image_4',
    },
    {
      ...image,
      name: 'image_5',
    },
  ],
}

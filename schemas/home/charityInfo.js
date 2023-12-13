// schemas/home/lowestPrice.js
import blockContent from '../blocks/blockContent'
import image from '../blocks/image'

export default {
  name: 'charityInfo',
  type: 'object',
  title: 'Charity Info Section',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {name: 'charityInfoTitle', type: 'string', title: 'Charity Section Title'},
    {
      ...blockContent,
      name: 'charityInfoSubtitle',
      title: 'Charity Section Subtitle',
    },
    {
      ...image,
      name: 'charityInfoImage',
      title: 'Charity Section Image',
    },
    {
      ...blockContent,
      name: 'charityInfoIntro',
      title: 'Charity Section Content',
    },
  ],
}

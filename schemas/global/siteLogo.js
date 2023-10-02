// schemas/global/siteLogo.js
import image from '../blocks/image'

export default {
  name: 'globalSiteLogo',
  type: 'object',
  title: 'Site Logo',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      ...image,
      name: 'siteLogo',
      title: 'Site Logo',
    },
  ],
}

// socialLink.js
import image from '../blocks/image'
export default {
  name: 'socialLink',
  type: 'object',
  title: 'Social Media Link',
  fields: [
    {
      ...image,
      name: 'icon',
      title: 'Icon',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Source on the web',
    },
  ],
}

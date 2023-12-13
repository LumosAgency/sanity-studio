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
  preview: {
    select: {
      title: 'icon.alt',
      iconRef: 'icon.asset', // This is the key update
    },
    prepare(selection) {
      const {title, iconRef} = selection
      return {
        title: title,
        media: iconRef,
      }
    },
  },
}

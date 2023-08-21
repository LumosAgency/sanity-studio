// schemas/privacy.js
import blockContent from './blocks/blockContent'
import image from './blocks/image'
import textContent from './blocks/textContent'

export default {
  name: 'privacy',
  type: 'document',
  title: 'Privacy Page',
  fields: [
    {
      ...image,
      name: 'privacyImage',
      title: 'Privacy Page Icon',
    },
    {
      name: 'privacyTitle',
      type: 'string',
      title: 'Privacy Page Title',
    },
    {
      title: 'Content',
      name: 'privacyContent',
      type: 'array',
      of: [blockContent, image, textContent],
    },
  ],
}

// schemas/global/social.js
import socialLink from '../blocks/socialLink'
export default {
  name: 'socialMedia',
  type: 'object',
  title: 'Social Media',
  fields: [
    {
      name: 'social',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          ...socialLink,
        },
      ],
    },
  ],
}

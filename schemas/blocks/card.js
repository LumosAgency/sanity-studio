// schemas/card.js
import blockContent from './blockContent'
import image from './image'

export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Title',
    },
    {
      ...image,
      name: 'icon',
      title: 'Icon',
    },
    {
      ...blockContent,
      name: 'body',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      bodyContent: 'body.content',
      iconRef: 'icon.asset', // This is the key update
    },
    prepare(selection) {
      const {title, bodyContent, iconRef} = selection
      let fallbackText
      if (
        bodyContent &&
        bodyContent.length > 0 &&
        bodyContent[0].children &&
        bodyContent[0].children.length > 0
      ) {
        fallbackText = bodyContent[0].children[0].text
      }
      return {
        title: title || fallbackText || 'No title available',
        media: iconRef,
      }
    },
  },
}

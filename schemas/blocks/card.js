// schemas/card.js
import blockContent from '../blocks/blockContent'
export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Text',
    },
    {
      ...blockContent,
      name: 'body',
      title: 'Text',
    },
  ],
}

// schemas/global/calculator.js
import DividerText from '../../components/SiteTags'
import address from './calculator/address'
import bill from './calculator/bill'
import email from './calculator/email'
import name from './calculator/name'
export default {
  name: 'globalCalculator',
  type: 'object',
  title: 'Calculator Fields',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'dividerText',
      title: 'Dynamic Tag Info',
      type: 'object',
      fields: [
        {
          name: 'dummyField',
          type: 'string',
        },
      ],
      components: {
        input: DividerText,
      },
    },
    name,
    bill,
    address,
    email,
  ],
}

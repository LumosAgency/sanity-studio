// schemas/global/calculator.js
import DividerText from '../../components/SiteTags'
import address from './calculator/address'
import bill from './calculator/bill'
import email from './calculator/email'
import name from './calculator/name'
import start from './calculator/start'
export default {
  name: 'globalCalculator',
  type: 'object',
  title: 'Calculator Fields',
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
    start,
    name,
    bill,
    address,
    email,
  ],
}

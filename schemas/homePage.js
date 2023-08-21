// schemas/homePage.ts
import charitablePartners from './home/charitablePartners'
import charityInfo from './home/charityInfo'
import comparison from './home/comparison'
import guarantee from './home/guarantee'
import hero from './home/hero'
import lowestPrice from './home/lowestPrice'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [hero, charitablePartners, lowestPrice, comparison, guarantee, charityInfo],
}

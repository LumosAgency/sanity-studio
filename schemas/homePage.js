// schemas/homePage.ts
import charitablePartners from './home/charitablePartners'
import heroSection from './home/heroSection'
import lowestPrice from './home/lowestPrice'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [heroSection, charitablePartners, lowestPrice],
}

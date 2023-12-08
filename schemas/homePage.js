// schemas/homePage.ts
import siteMeta from './global/siteMeta'
import charitablePartners from './home/charitablePartners'
import charityInfo from './home/charityInfo'
import comparison from './home/comparison'
import guarantee from './home/guarantee'
import hero from './home/hero'
import lowestPrice from './home/lowestPrice'
import partners from './home/partners'
import testimonials from './home/testimonials'
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Page Meta',
    },
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {...siteMeta, title: 'Homepage SEO', group: ['meta']},
    {...hero, group: ['content']},
    {...charitablePartners, group: ['content']},
    {...partners, group: ['content']},
    {...lowestPrice, group: ['content']},
    {...comparison, group: ['content']},
    {...guarantee, group: ['content']},
    {...testimonials, group: ['content']},
    {...charityInfo, group: ['content']},
  ],
  preview: {
    prepare: () => ({
      title: 'Home Page',
    }),
  },
}

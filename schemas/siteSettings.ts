// schemas/siteSettings.ts
import alertBar from './global/alertBar'
import calculator from './global/calculator'

export default {
  name: 'siteSettings',
  title: 'Glboal Site Settings',
  type: 'document',
  fields: [alertBar, calculator],
}


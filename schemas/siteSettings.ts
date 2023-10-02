// schemas/siteSettings.ts
import alertBar from './global/alertBar'
import calculator from './global/calculator'
import siteLogo from './global/siteLogo'

export default {
  name: 'siteSettings',
  title: 'Glboal Site Settings',
  type: 'document',
  fields: [siteLogo, alertBar, calculator],
}


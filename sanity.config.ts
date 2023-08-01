import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {myStructure} from './deskStructure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'energi-antelope',

  projectId: 'h7p727y7',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

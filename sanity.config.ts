import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {slugOnSave} from './actions/slugOnSave'
import {myStructure} from './deskStructure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'energi-antelope',

  projectId: 'h7p727y7',
  dataset: 'production',

  plugins: [
    table(),
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === 'publish' ? slugOnSave(originalAction) : originalAction
      ),
  },
})

// schemas/resources.ts
import resourceGroups from './blocks/resourceGroups'
export default {
  name: 'resources',
  type: 'document',
  title: 'Resources Grouping',
  fields: [
    {
      title: 'Resource Groups',
      name: 'resourceGroup',
      type: 'array',
      of: [resourceGroups],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Groups',
    }),
  },
}

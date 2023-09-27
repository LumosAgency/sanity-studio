// schemas/resourceGroup.ts
export default {
  name: 'resourceGroups',
  type: 'object', // change this to 'object'
  title: 'Resource Groups',
  fields: [
    {
      name: 'resourcesGroupTitle',
      title: 'Group Title',
      type: 'string',
    },
    {
      title: 'Group',
      name: 'resourcesPages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'resourcePages'}]}],
    },
  ],
  preview: {
    select: {
      title: 'resourcesGroupTitle',
    },
  },
}

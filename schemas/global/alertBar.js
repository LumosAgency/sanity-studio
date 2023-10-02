// schemas/global/alertBar.js
export default {
  name: 'globalAlertBar',
  type: 'object',
  title: 'Alert Bar',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: 'alertBar',
      title: 'Alertbar Text',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
}

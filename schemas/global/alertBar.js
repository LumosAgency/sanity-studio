// schemas/global/alertBar.js
export default {
  name: 'globalAlertBar',
  type: 'object',
  title: 'Alert Bar',
  fields: [
    {
      name: 'alertBarEnabled',
      title: 'Enable Alertbar',
      type: 'boolean',
    },
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

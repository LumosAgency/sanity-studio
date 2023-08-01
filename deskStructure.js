// ./deskStructure.js
import {EarthGlobeIcon, HomeIcon} from '@sanity/icons'
const pageMap = [
  {
    id: 'siteSettings', // must match the name of the scheme file name
    title: 'Site Settings',
    icon: EarthGlobeIcon,
  },
  {
    id: 'homePage',
    title: 'Home Page',
    icon: HomeIcon,
  },
]

export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items(
      pageMap
        .map((page) =>
          S.listItem()
            .title(page.title)
            .icon(page.icon)
            .child(S.document().schemaType(page.id).documentId(page.id))
        )
        .concat(
          S.documentTypeListItems().filter(
            (listItem) => !pageMap.some((page) => page.id === listItem.getId())
          )
        )
    )

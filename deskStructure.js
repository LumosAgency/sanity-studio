// ./deskStructure.js
import {
  BillIcon,
  CaseIcon,
  DocumentWordIcon,
  EarthGlobeIcon,
  HomeIcon,
  LaunchIcon,
  LockIcon,
  PinIcon,
  UnknownIcon,
} from '@sanity/icons'
const pageMap = [
  {
    id: 'siteSettings', // must match the name of the scheme file name
    title: 'Site Settings',
    icon: EarthGlobeIcon,
  },
  {
    id: 'homePage',
    title: 'Home',
    icon: HomeIcon,
  },
  {
    id: 'resources',
    title: 'Resources Menu',
    icon: LaunchIcon,
  },
]

export const myStructure = (S, context) =>
  S.list()
    .title('Energi Antelope')
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

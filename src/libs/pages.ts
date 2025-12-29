// import type { NavItem } from "~/typings"

export interface PageInfo {
  id: string
  title: string
  href: string
  regex?: RegExp;
  pattern?: RegExp;
  auth: boolean
  role?: string[]
  base_role?: number[]
}

// function extractPagesFromNav(items: Pick<NavItem, 'id' | 'title' | 'href' | 'regex' | 'pattern' | 'role' | 'base_role' | 'badge' | 'children'>[], pages: PageInfo[] = []): PageInfo[] {
//   for (const item of items) {
//     if (item.href) {
//       pages.push({
//         id: item.id,
//         title: item.title,
//         href: item.href,
//         regex: item.regex,
//         pattern: item.pattern,
//         auth: true, // All sidebar pages are authenticated
//         role: item.role,
//         base_role: item.base_role,
//       })
//     }

//     if (item.children && item.children.length > 0) {
//       extractPagesFromNav(item.children, pages)
//     }
//   }

//   return pages
// }

function getPagesFromNavigation(): PageInfo[] {
  const pages: PageInfo[] = []

  // for (const section of navigationSections) {
  //   extractPagesFromNav(section.items, pages)
  // }

  return pages
}

const additionalPages: PageInfo[] = [
]

export function getAllPages(): PageInfo[] {
  const navPages = getPagesFromNavigation()
  return [...navPages, ...additionalPages]
}

export function getAuthPages(): PageInfo[] {
  return getAllPages().filter((page) => page.auth)
}

export function getPublicPages(): PageInfo[] {
  return getAllPages().filter((page) => !page.auth)
}

export function getPagesByRole(userRole?: string, userBaseRole?: number): PageInfo[] {
  return getAllPages().filter((page) => {
    // If page has no role restrictions, it's accessible
    if (!page.role && !page.base_role) return true

    // Check base_role if specified
    if (page.base_role && userBaseRole !== undefined) {
      if (!page.base_role.includes(userBaseRole)) return false
    }

    // Check role if specified
    if (page.role && userRole) {
      if (!page.role.includes(userRole)) return false
    }

    return true
  })
}

import { BookOpen, Clock3, Library, type LucideIcon } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link, useSearch } from '@tanstack/react-router'

export type LibraryFilterType = 'all' | 'continue' | 'recent'

interface NavItemConfig {
  label: string
  filter: LibraryFilterType
  icon: LucideIcon
}

const NAV_ITEMS: NavItemConfig[] = [
  {
    label: 'Library',
    filter: 'all',
    icon: Library,
  },
  {
    label: 'Continue reading',
    filter: 'continue',
    icon: BookOpen,
  },
  {
    label: 'Recently added',
    filter: 'recent',
    icon: Clock3,
  },
]

export function LibraryFilter() {
  const search = useSearch({ strict: false }) as { filter?: LibraryFilterType }
  const currentFilter = search.filter || 'all'

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-3 text-[10px] font-light tracking-widest text-white/75 uppercase">
        Browse
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {NAV_ITEMS.map(({ label, filter, icon: Icon }) => {
            const isActive = currentFilter === filter

            return (
              <SidebarMenuItem key={filter}>
                <Link
                  to="/library"
                  search={{ filter }}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 my-0.5 text-[13px] transition-colors ${isActive
                      ? 'bg-[#18191c] text-white font-medium'
                      : 'text-[#a0a3a8] hover:bg-[#18191c] hover:text-white'
                    }`}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0 text-[#8a8f98]" />
                  <span className="truncate">{label}</span>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
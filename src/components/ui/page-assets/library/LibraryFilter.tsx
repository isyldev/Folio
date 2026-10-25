import { BookOpen, Clock, Sparkles, type LucideIcon } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
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
    icon: BookOpen,
  },
  {
    label: 'Continue reading',
    filter: 'continue',
    icon: Clock,
  },
  {
    label: 'Recently added',
    filter: 'recent',
    icon: Sparkles,
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
                  className={`flex w-full items-center gap-2 rounded-md p-2 text-sm transition-colors ${isActive
                      ? 'bg-[#18191c] font-medium text-white'
                      : 'text-[#a0a3a8] hover:bg-[#18191c] hover:text-white'
                    }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#8a8f98]" />
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
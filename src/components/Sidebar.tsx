import {
  Settings,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import FolioLogo from './ui/FolioLogo'
import { LibraryFilter } from './library/LibraryFilter'
import { SidebarProfileFooter } from './sidebar/SidebarProfileFooter'

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#1f2023] bg-[#0c0d0e] text-[#a0a3a8] px-1s">
      {/* Brand Header */}
      <SidebarHeader className="p-4">
        <FolioLogo />
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <div className='mt-5'>
          <LibraryFilter />
        </div>

        {/* System Group */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link
                  to="/settings"
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2.5 text-sm text-[#a0a3a8] transition-colors hover:bg-[#18191c] hover:text-white"
                >
                  <Settings className="h-4 w-4 text-[#8a8f98]" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Footer Profile Card */}
      <SidebarProfileFooter />
    </Sidebar>
  )
}

import {
  BookOpen,
  Clock,
  Sparkles,
  Settings,
  MoreHorizontal,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#1f2023] bg-[#0c0d0e] text-[#a0a3a8]">
      {/* Brand Header */}
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2.5">
          <div className="logo-mark">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <span className="font-serif text-lg tracking-tight text-white">Folio</span>
        </div>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold tracking-wider text-[#555860] uppercase">
            Browse
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link
                    to="/library"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#18191c] hover:text-white data-[active=true]:bg-[#18191c] data-[active=true]:text-white"
                  >
                    <BookOpen className="h-4 w-4 text-[#8a8f98]" />
                    <span>Library</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/library"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#18191c] hover:text-white"
                  >
                    <Clock className="h-4 w-4 text-[#8a8f98]" />
                    <span>Continue reading</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/library"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#18191c] hover:text-white"
                  >
                    <Sparkles className="h-4 w-4 text-[#8a8f98]" />
                    <span>Recently added</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Group */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold tracking-wider text-[#555860] uppercase">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/settings"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#18191c] hover:text-white"
                  >
                    <Settings className="h-4 w-4 text-[#8a8f98]" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Footer Profile Card */}
      <SidebarFooter className="p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center w-full gap-3 p-2 rounded-lg bg-[#141518] hover:bg-[#1a1b1e] border border-[#222428] transition-colors text-left group">
              <Avatar className="h-8 w-8 bg-[#2a2c32] text-xs font-semibold text-white">
                <AvatarFallback className="bg-[#2a2c32] text-white">AM</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#d6d7da] truncate group-hover:text-white">
                  Alex Morgan
                </p>
                <p className="text-[10px] text-[#686b73] truncate">6 books</p>
              </div>
              <MoreHorizontal className="h-4 w-4 text-[#555860] group-hover:text-white transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-[#18191c] border-[#2a2c32] text-white">
            <DropdownMenuItem className="focus:bg-[#26282d] focus:text-white cursor-pointer">
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#26282d] focus:text-white cursor-pointer text-red-400">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
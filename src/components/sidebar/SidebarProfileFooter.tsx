import { 
  MoreHorizontal, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut,
  type LucideIcon 
} from 'lucide-react'
import { SidebarFooter } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useNavigate } from '@tanstack/react-router'

interface ProfileMenuItem {
  label: string
  icon: LucideIcon
  to?: string
  variant?: 'default' | 'destructive'
  onClick?: () => void
}

export function SidebarProfileFooter() {
  const navigate = useNavigate()

  const MENU_ITEMS: ProfileMenuItem[][] = [
    [
      { label: 'View profile', icon: User, to: '/profile' },
      { label: 'Account settings', icon: Settings, to: '/settings' },
      { label: 'Help & support', icon: HelpCircle, to: '/support' },
    ],
    [
      { 
        label: 'Sign out', 
        icon: LogOut, 
        variant: 'destructive',
        onClick: () => {
          // Add your sign out logic here (e.g., clearing auth state & redirecting)
          navigate({ to: '/auth' })
        }
      },
    ],
  ]

  return (
    <SidebarFooter className="p-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="group flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-[#1a1b1e]">
            <Avatar className="h-8 w-8 bg-[#2a2c32] text-xs font-semibold text-white">
              <AvatarFallback className="bg-[#2a2c32] text-white">
                AM
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-[#d6d7da] group-hover:text-white">
                Alex Morgan
              </p>
              <p className="truncate text-[10px] text-[#686b73]">
                6 books
              </p>
            </div>

            <MoreHorizontal className="h-4 w-4 text-[#555860] transition-colors group-hover:text-white" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          side="top"
          sideOffset={8}
          className="w-50 border-[#222428] bg-[#141518] p-1.5 text-white shadow-xl"
        >
          {MENU_ITEMS.map((group, groupIdx) => (
            <div key={groupIdx}>
              {groupIdx > 0 && <DropdownMenuSeparator className="my-1 bg-[#222428]" />}
              {group.map(({ label, icon: Icon, to, variant = 'default', onClick }) => {
                const isDestructive = variant === 'destructive'

                return (
                  <DropdownMenuItem
                    key={label}
                    onClick={() => {
                      if (to) {
                        navigate({ to })
                      }
                      onClick?.()
                    }}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-xs font-medium focus:bg-[#1c1e22] ${
                      isDestructive
                        ? 'text-red-400 focus:text-red-300'
                        : 'text-[#d6d7da] focus:text-white'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isDestructive ? 'text-red-400' : 'text-[#8a8f98]'}`} />
                    <span>{label}</span>
                  </DropdownMenuItem>
                )
              })}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  )
}
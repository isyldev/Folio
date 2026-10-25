import { useState } from 'react'
import { Bell, BookOpen, Bookmark, Sparkles, Check, type LucideIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useNavigate } from '@tanstack/react-router'

export interface NotificationItem {
  id: string
  title: string
  description: string
  timestamp: string
  unread: boolean
  icon: LucideIcon
  iconBg: string
  iconColor: string
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    title: 'Ready for another chapter?',
    description: 'You’re 68% through The Creative Act.',
    timestamp: '12 minutes ago',
    unread: true,
    icon: BookOpen,
    iconBg: 'bg-[#1b2536]',
    iconColor: 'text-[#4c82f7]',
  },
  {
    id: '2',
    title: 'Your highlight is saved',
    description: '"Constraints give the work its shape."',
    timestamp: 'Yesterday',
    unread: true,
    icon: Bookmark,
    iconBg: 'bg-[#292318]',
    iconColor: 'text-[#e5a038]',
  },
  {
    id: '3',
    title: 'A strong reading week',
    description: 'You read for 4 hours across 3 books.',
    timestamp: 'Monday',
    unread: false,
    icon: Sparkles,
    iconBg: 'bg-[#1f2126]',
    iconColor: 'text-[#8a8f98]',
  },
  {
    id: '3',
    title: 'A strong reading week',
    description: 'You read for 4 hours across 3 books.',
    timestamp: 'Monday',
    unread: false,
    icon: Sparkles,
    iconBg: 'bg-[#1f2126]',
    iconColor: 'text-[#8a8f98]',
  },
  {
    id: '3',
    title: 'A strong reading week',
    description: 'You read for 4 hours across 3 books.',
    timestamp: 'Monday',
    unread: false,
    icon: Sparkles,
    iconBg: 'bg-[#1f2126]',
    iconColor: 'text-[#8a8f98]',
  },
  {
    id: '3',
    title: 'A strong reading week',
    description: 'You read for 4 hours across 3 books.',
    timestamp: 'Monday',
    unread: false,
    icon: Sparkles,
    iconBg: 'bg-[#1f2126]',
    iconColor: 'text-[#8a8f98]',
  },
  {
    id: '3',
    title: 'A strong reading week',
    description: 'You read for 4 hours across 3 books.',
    timestamp: 'Monday',
    unread: false,
    icon: Sparkles,
    iconBg: 'bg-[#1f2126]',
    iconColor: 'text-[#8a8f98]',
  },
]

export function NotificationPopover() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS)
  const navigate = useNavigate()

  const unreadCount = notifications.filter((n) => n.unread).length

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })))
  }

  return (
    <Popover>
      <PopoverTrigger asChild className='h-fit'>
        <Button
          variant="outline"
          size="icon"
          className="relative h-10 w-10 rounded-xl border-[#222428] bg-[#141518] hover:bg-[#1a1b1e] hover:text-white transition-colors"
        >
          <Bell className="h-4 w-4 text-[#a0a3a8]" />
          {unreadCount > 0 && (
            <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#4c82f7] ring-2 ring-[#0c0d0e]" />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-65 md:w-95 border-[#222428] bg-[#141518] p-0 text-white shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 pb-3">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-white">Notifications</h4>
            {unreadCount > 0 && (
              <Badge className="bg-[#1e2638] text-[#4c82f7] hover:bg-[#1e2638] text-[11px] font-medium px-2 py-0.5 border-0 rounded-full">
                {unreadCount} new
              </Badge>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="flex items-center gap-1.5 text-xs text-[#8a8f98] hover:text-white transition-colors cursor-pointer"
            >
              <Check className="h-3.5 w-3.5" />
              <span>Mark all read</span>
            </button>
          )}
        </div>

        {/* Notification Items List */}
        <div className="flex flex-col max-h-40 overflow-y-scroll divide-y divide-[#1f2126]">
          {notifications.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="flex items-start gap-3.5 p-2.5 transition-colors hover:bg-[#18191d] group cursor-pointer"
              >

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <p className="text-xs font-semibold text-[#e8e8e6] leading-tight group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-[#8a8f98] leading-normal line-clamp-2">
                    {item.description}
                  </p>
                  <p className="mt-1.5 text-[10px] text-[#555860]">
                    {item.timestamp}
                  </p>
                </div>

                {/* Unread Indicator Dot */}
                {item.unread && (
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4c82f7]" />
                )}
              </div>
            )
          })}
        </div>

        <Separator className="bg-[#1f2126]" />

        {/* Footer Link */}
        <div className="p-3 text-center bg-[#111215]">
          <button
            onClick={() => navigate({ to: '/settings' })}
            className="text-xs font-medium text-[#4c82f7] hover:text-[#6a98ff] transition-colors cursor-pointer"
          >
            View notification settings
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
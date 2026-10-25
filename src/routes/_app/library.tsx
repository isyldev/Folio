import { LibrarySearchInput } from '@/components/library/LibrarySeachInput'
import { NotificationPopover } from '@/components/library/NotificationPopOver'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/library')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='h-screen w-full p-6 flex justify-center gap-5'>
    <LibrarySearchInput />
    <NotificationPopover />

  </div>
}

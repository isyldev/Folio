import { BookCard } from '@/components/library/BookCard'
import { FormatFilterToggle } from '@/components/library/FormatFilterToggle'
import { LibraryHeader } from '@/components/library/LibraryHeader'
import { LibrarySearchInput } from '@/components/library/LibrarySeachInput'
import { LibrarySortDropdown } from '@/components/library/LibrarySortDropdown'
import { LibraryViewToggle } from '@/components/library/LibraryViewToggle'
import { NotificationPopover } from '@/components/library/NotificationPopOver'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/library')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='h-fit w-full p-6 flex flex-col gap-5'>
    <div>
      <LibrarySearchInput />
      <NotificationPopover />
    </div>
    <div className="flex items-end justify-between">
      <LibraryHeader />
      <LibraryViewToggle />
    </div>

    <div>
      <FormatFilterToggle />
      <LibrarySortDropdown />
    </div>

    <div>
      <BookCard />
    </div>

  </div>
}

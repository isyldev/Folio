import { useNavigate, useSearch } from '@tanstack/react-router'
import { SlidersHorizontal, Check, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'

export type SortField = 'dateAdded' | 'title' | 'author'
export type SortOrder = 'asc' | 'desc'

interface SearchParams {
  filter?: string
  view?: string
  format?: string
  sortBy?: SortField
  sortOrder?: SortOrder
}

const SORT_FIELDS = [
  { label: 'Date Added', value: 'dateAdded' },
  { label: 'Title', value: 'title' },
  { label: 'Author', value: 'author' },
] as const

const SORT_ORDERS = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
] as const

export function LibrarySortDropdown() {
  const navigate = useNavigate()
  const search = useSearch({ strict: false }) as SearchParams

  const currentSortBy = search.sortBy ?? 'dateAdded'
  const currentSortOrder = search.sortOrder ?? 'desc'

  const getDisplayLabel = () => {
    switch (currentSortBy) {
      case 'title':
        return 'Title'
      case 'author':
        return 'Author'
      case 'dateAdded':
      default:
        return 'Recent'
    }
  }

  const handleFieldChange = (sortBy: SortField) => {
    navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        sortBy: sortBy === 'dateAdded' ? undefined : sortBy,
      }),
    })
  }

  const handleOrderChange = (sortOrder: SortOrder) => {
    navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        sortOrder: sortOrder === 'desc' ? undefined : sortOrder,
      }),
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 items-center gap-2 rounded-xl border border-[#222428] bg-[#141518] px-3 text-xs font-medium text-[#8a8f98] transition-colors hover:bg-[#1a1b1e] hover:text-white cursor-pointer focus:outline-none">
        <SlidersHorizontal className="h-3.5 w-3.5 text-[#8a8f98]" />
        <span>
          Sort: <strong className="font-medium text-white">{getDisplayLabel()}</strong>
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-[#555860]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="w-48 rounded-xl border border-[#222428] bg-[#141518] p-1 text-white shadow-xl"
      >
        {/* Sort Field Group */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#555860]">
            Sort by
          </DropdownMenuLabel>
          {SORT_FIELDS.map(({ label, value }) => {
            const isSelected = currentSortBy === value
            return (
              <DropdownMenuItem
                key={value}
                onClick={() => handleFieldChange(value)}
                className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-[#d6d7da] focus:bg-[#1c1e22] focus:text-white"
              >
                <span>{label}</span>
                {isSelected && <Check className="h-3.5 w-3.5 text-[#4c82f7]" />}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-[#222428]" />

        {/* Sort Order Group */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#555860]">
            Direction
          </DropdownMenuLabel>
          {SORT_ORDERS.map(({ label, value }) => {
            const isSelected = currentSortOrder === value
            return (
              <DropdownMenuItem
                key={value}
                onClick={() => handleOrderChange(value)}
                className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-[#d6d7da] focus:bg-[#1c1e22] focus:text-white"
              >
                <span>{label}</span>
                {isSelected && <Check className="h-3.5 w-3.5 text-[#4c82f7]" />}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
import { useNavigate, useSearch } from '@tanstack/react-router'
import { LayoutGrid, List, type LucideIcon } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export type LibraryViewType = 'grid' | 'list'

interface SearchParams {
  filter?: string
  view?: LibraryViewType
}

interface ToggleOption {
  value: LibraryViewType
  label: string
  icon: LucideIcon
}

const VIEW_OPTIONS: ToggleOption[] = [
  { value: 'grid', label: 'Grid view', icon: LayoutGrid },
  { value: 'list', label: 'List view', icon: List },
]

export function LibraryViewToggle() {
  const navigate = useNavigate()
  const search = useSearch({ strict: false }) as SearchParams
  const currentView = search.view ?? 'grid'

  const handleViewChange = (values: string[]) => {
    const selected = values[0] as LibraryViewType | undefined
    if (!selected || (selected !== 'grid' && selected !== 'list')) return

    navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        view: selected,
      }),
    })
  }

  return (
    <ToggleGroup
      value={[currentView]}
      onValueChange={handleViewChange}
      spacing={0}
      className="inline-flex h-fit rounded-lg border border-[#222428] bg-[#141518] p-1"
    >
      {VIEW_OPTIONS.map(({ value, label, icon: Icon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={label}
          className="h-6 w-6 cursor-pointer rounded-sm p-0 text-[#8a8f98] transition-colors hover:bg-[#1f2126] hover:text-white data-[pressed]:bg-[#1f2126] data-[pressed]:text-white"
        >
          <Icon className="h-4 w-4" />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
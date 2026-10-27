import { useNavigate, useSearch } from '@tanstack/react-router'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export type BookFormatType = 'all' | 'epub' | 'pdf'

interface SearchParams {
  filter?: string
  view?: string
  format?: BookFormatType
}

interface FormatOption {
  value: BookFormatType
  label: string
}

const FORMAT_OPTIONS: FormatOption[] = [
  { value: 'all', label: 'All books' },
  { value: 'epub', label: 'EPUB' },
  { value: 'pdf', label: 'PDF' },
]

export function FormatFilterToggle() {
  const navigate = useNavigate()
  const search = useSearch({ strict: false }) as SearchParams
  const currentFormat = search.format ?? 'all'

  const handleFormatChange = (values: string[]) => {
    const selected = values[0] as BookFormatType | undefined
    if (!selected || !['all', 'epub', 'pdf'].includes(selected)) return

    navigate({
      to: '.',
      search: (prev) => ({
        ...prev,
        format: selected === 'all' ? undefined : selected, // Clean URL: drop query if 'all'
      }),
    })
  }

  return (
    <ToggleGroup
      value={[currentFormat]}
      onValueChange={handleFormatChange}
      spacing={0}
      className="inline-flex items-center gap-1 rounded-xl bg-transparent p-0.5"
    >
      {FORMAT_OPTIONS.map(({ value, label }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={`Filter by ${label}`}
          className=" px-3 text-xs font-semibold text-[#8a8f98] transition-colors hover:bg-[#1a1b1e] hover:text-[#d6d7da] data-[pressed]:bg-[#1c1e22] data-[pressed]:text-white"
        >
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
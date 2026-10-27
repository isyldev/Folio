import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface LibrarySearchInputProps {
  value?: string
  onChange?: (value: string) => void
  onOpenCommandPalette?: () => void
}

export function LibrarySearchInput({
  value,
  onChange,
}: LibrarySearchInputProps) {
  return (
    <div className="relative w-full max-w-80 md:max-w-110 h-9">
      {/* Search Icon */}
      <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white-50 pointer-events-none" />

      {/* Shadcn Input */}
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Search your library"
        className="h-full w-full rounded-lg placeholder:text-xs placeholder:text-white/50 bg-[#141518] pl-10 pr-16 text-sm  border-[#222428] focus-visible:border-[#3a3d46] focus-visible:ring-0 transition-colors"
      />
    </div>
  )
}
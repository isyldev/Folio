import { useSearch } from '@tanstack/react-router'
import type { LibraryFilterType } from './LibraryFilter'

interface HeaderConfig {
  eyebrow: string
  title: string
  count: number
}

const HEADER_CONFIGS: Record<LibraryFilterType, HeaderConfig> = {
  all: {
    eyebrow: 'MY COLLECTION',
    title: 'Library',
    count: 6,
  },
  continue: {
    eyebrow: 'YOUR LIBRARY',
    title: 'Continue reading',
    count: 5,
  },
  recent: {
    eyebrow: 'YOUR LIBRARY',
    title: 'Recently added',
    count: 3,
  },
}

export function LibraryHeader() {
  const search = useSearch({ strict: false }) as { filter?: LibraryFilterType }
  const currentFilter = search.filter || 'all'

  const { eyebrow, title, count } = HEADER_CONFIGS[currentFilter] || HEADER_CONFIGS.all

  return (
    <div className="flex flex-col gap-1 sm:gap-1.5">
      {/* Eyebrow Label with Accent Tint */}
      <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#4c82f7] uppercase">
        {eyebrow}
      </span>

      {/* Serif Heading - Responsive Sizing */}
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white">
        {title}
      </h1>

      {/* Subtitle Count */}
      <p className="text-xs sm:text-sm font-medium text-[#8a8f98]">
        {count} {count === 1 ? 'book' : 'books'} in your collection
      </p>
    </div>
  )
}
import { useState, useRef } from 'react'
import { useSearch } from '@tanstack/react-router'
import { MoreHorizontal, Edit3, Trash2, CloudUpload, Tag } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import type { LibraryViewType } from './LibraryViewToggle'

export interface Book {
  id: string
  title: string
  author: string
  coverUrl?: string
  coverBgColor?: string
  format: 'EPUB' | 'PDF'
  progress: number
  timestamp: string
}

interface BookCardProps {
  book: Book
  onClick?: () => void
  onRename?: (book: Book) => void
  onDelete?: (book: Book) => void
  onUploadCloud?: (book: Book) => void
  onAddTag?: (book: Book) => void
}

interface SearchParams {
  view?: LibraryViewType
}

export function BookCard({
  book,
  onClick,
  onRename,
  onDelete,
  onUploadCloud,
  onAddTag,
}: BookCardProps) {
  const search = useSearch({ strict: false }) as SearchParams
  const view = search.view ?? 'grid'
  const isGrid = view === 'grid'

  const [menuOpen, setMenuOpen] = useState(false)
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Long-press handling for mobile (and fallback for desktop)
  const handleTouchStart = () => {
    longPressTimerRef.current = setTimeout(() => {
      setMenuOpen(true)
    }, 500) // 500ms hold triggers the menu
  }

  const handleTouchEnd = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
    }
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault() // Allow right-click menu override
    setMenuOpen(true)
  }

  const renderDropdownContent = () => (
    <DropdownMenuContent
      align="end"
      sideOffset={4}
      className="w-48 rounded-xl border border-[#222428] bg-[#141518] p-1 text-white shadow-2xl z-50"
    >
      <DropdownMenuItem
        onClick={(e) => {
          e.stopPropagation()
          onRename?.(book)
        }}
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[#d6d7da] focus:bg-[#1c1e22] focus:text-white"
      >
        <Edit3 className="h-3.5 w-3.5 text-[#8a8f98]" />
        <span>Rename</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={(e) => {
          e.stopPropagation()
          onAddTag?.(book)
        }}
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[#d6d7da] focus:bg-[#1c1e22] focus:text-white"
      >
        <Tag className="h-3.5 w-3.5 text-[#8a8f98]" />
        <span>Add tag</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={(e) => {
          e.stopPropagation()
          onUploadCloud?.(book)
        }}
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[#d6d7da] focus:bg-[#1c1e22] focus:text-white"
      >
        <CloudUpload className="h-3.5 w-3.5 text-[#4c82f7]" />
        <span>Upload to cloud</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator className="my-1 bg-[#222428]" />

      <DropdownMenuItem
        onClick={(e) => {
          e.stopPropagation()
          onDelete?.(book)
        }}
        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-red-400 focus:bg-red-950/40 focus:text-red-300"
      >
        <Trash2 className="h-3.5 w-3.5 text-red-400" />
        <span>Delete</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )

  if (isGrid) {
    return (
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <div
          onClick={onClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onContextMenu={handleContextMenu}
          className="group relative flex flex-col gap-3 cursor-pointer select-none"
        >
          {/* Book Cover Container */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#141518] border border-[#222428] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={book.title} className="h-full w-full object-cover" />
            ) : (
              <div
                className="flex h-full w-full flex-col justify-between p-5 text-white"
                style={{ backgroundColor: book.coverBgColor || '#c85a32' }}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">The</span>
                  <h3 className="font-serif text-xl font-bold leading-tight">{book.title}</h3>
                </div>
                <span className="text-xs font-medium opacity-90">{book.author}</span>
              </div>
            )}

            {/* Hamburger Trigger Menu (Visible on hover on desktop, or when triggered) */}
            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <DropdownMenuTrigger
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition-colors focus:outline-none cursor-pointer"
                aria-label="Book options"
              >
                <MoreHorizontal className="h-4 w-4" />
              </DropdownMenuTrigger>
            </div>
          </div>

          {renderDropdownContent()}

          {/* Metadata & Progress */}
          <div className="flex flex-col gap-2 px-0.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-white group-hover:text-[#4c82f7] transition-colors">
                  {book.title}
                </h4>
                <p className="truncate text-xs text-[#8a8f98]">{book.author}</p>
              </div>
              <span className="shrink-0 rounded-md bg-[#18191d] border border-[#222428] px-1.5 py-0.5 text-[10px] font-medium text-[#8a8f98]">
                {book.format}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1f2126]">
                <div
                  className="h-full rounded-full bg-[#4c82f7] transition-all duration-500"
                  style={{ width: `${book.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#8a8f98]">
                <span>{book.progress === 0 ? 'Not started' : `${book.progress}%`}</span>
                <span>{book.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenu>
    )
  }

  /* List Mode Layout */
  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <div
        onClick={onClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onContextMenu={handleContextMenu}
        className="group relative flex items-center gap-4 rounded-xl border border-[#222428] bg-[#141518]/60 p-3 hover:bg-[#18191d] transition-colors cursor-pointer select-none"
      >
        <div className="relative aspect-[3/4] h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-[#141518] border border-[#222428]">
          {book.coverUrl ? (
            <img src={book.coverUrl} alt={book.title} className="h-full w-full object-cover" />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center p-1 text-[8px] font-bold text-white text-center leading-none"
              style={{ backgroundColor: book.coverBgColor || '#c85a32' }}
            >
              {book.title}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-xs md:text-sm font-semibold text-white group-hover:text-[#4c82f7] transition-colors">
                {book.title}
              </h4>
              <p className="truncate text-xs text-[#8a8f98]">{book.author}</p>
            </div>
            <span className="shrink-0 rounded-md bg-[#1f2126] border border-[#2a2d35] px-1.5 py-0.5 text-[10px] font-medium text-[#8a8f98]">
              {book.format}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1f2126]">
              <div
                className="h-full rounded-full bg-[#4c82f7] transition-all duration-500"
                style={{ width: `${book.progress}%` }}
              />
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#8a8f98] shrink-0">
              <span>{book.progress === 0 ? 'Not started' : `${book.progress}%`}</span>
              <span className="w-20 text-right">{book.timestamp}</span>
            </div>
          </div>
        </div>

        {/* List Mode Options Button */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
          <DropdownMenuTrigger
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1f2126] text-[#8a8f98] hover:text-white hover:bg-[#2a2d35] transition-colors focus:outline-none cursor-pointer"
            aria-label="Book options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
        </div>

        {renderDropdownContent()}
      </div>
    </DropdownMenu>
  )
}
import { books } from "./BookCover"
import BookCover from "./BookCover"


export default function DesktopIllustrationPanel() {
  return (
    <section className="folio-hero relative hidden min-h-140 min-w-0 overflow-hidden lg:block">
      {/* Desktop logo */}
      <div className="absolute left-7 top-0 z-20 flex h-23 w-23 items-center">
        <div className="w-1/2 shrink-0">
          <img
            src="/logo.png"
            alt="Folio logo"
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="relative text-lg font-semibold">Folio</p>
      </div>

      {/* Orbital rings */}
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-inner" />

      {/* Floating book covers */}
      <div className="book-scene">
        {books.map((book) => (
          <BookCover
            key={book.className}
            title={book.title}
            className={book.className}
          />
        ))}
      </div>

      {/* Editorial hero copy */}
      <div className="hero-caption absolute bottom-17 left-[6.3%] z-10">
        <h2 className="font-editorial text-[clamp(36px,3.95vw,51px)] leading-[1.08] tracking-[-2.5px] text-[#e9e9eb]">
          Your books.
          <br />
          Your quiet place.
        </h2>
      </div>
    </section>
  )
}

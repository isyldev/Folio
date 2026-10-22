import BookCover from "@/components/ui/page-assets/auth-page/BookCover";
import { books } from "@/components/ui/page-assets/auth-page/BookCover";



export default function AuthPage() {
  return (
    <main className="folio-login min-h-screen w-full overflow-hidden bg-[#111214] text-[#e8e8ea]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[54.9%_45.1%]">
        {/* Left: brand and book illustration */}
        <section className="folio-hero relative min-h-140 overflow-hidden">
          {/* Logo */}
          <div className="absolute flex flex-row items-center h-23 w-23 left-7 top-px z-20">
            <div className="w-1/2 shrink-0" >
              <img src="/logo.png" />
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

        {/* Right: authentication panel */}
        <section className="flex min-h-140 items-center justify-center bg-[#111214] px-8 py-14 sm:px-12 lg:px-10 xl:px-16">
          <div className="w-full max-w-97.5">
            <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[1.7px] text-[#79a7ff]">
              Welcome to Folio
            </p>

            <h1 className="font-editorial text-[clamp(42px,4.4vw,60px)] leading-[1.04] tracking-[-2.9px] text-[#e8e8ea]">
              Read without
              <br />
              the noise.
            </h1>

            <p className="mt-6.25 max-w-92.5 text-[12px] leading-5.25 text-[#858892]">
              Your personal library, thoughtfully organized and always ready
              <br className="hidden xl:block" /> where you left off.
            </p>

            <div className="mt-[34px] flex flex-col gap-[10px]">
              <button
                type="button"
                className="flex h-[47px] w-full items-center justify-center gap-[10px] rounded-[9px] border border-white/[0.025] bg-[#242527] text-[12px] font-semibold text-white transition-colors hover:bg-[#2b2c2f]"
              >
                <div className="w-5 h-5">
                  <img src='/google.png' />
                </div>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="flex h-[47px] w-full items-center justify-center gap-[10px] rounded-[9px] border border-white/[0.045] bg-[#191a1d] text-[12px] font-semibold text-white transition-colors hover:bg-[#202125]"
              >
                <div className="w-5 h-5">
                  <img src='/discord.png' />
                </div>
                <span>Continue with Discord</span>
              </button>
            </div>

            <p className="mt-[20px] text-center text-[8px] leading-4 text-[#a0a1a7]">
              By continuing, you agree to Folio&apos;s{" "}
              <a href="#" className="underline underline-offset-2">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

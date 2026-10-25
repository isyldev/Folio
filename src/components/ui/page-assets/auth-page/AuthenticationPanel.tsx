import FolioLogo from '../../FolioLogo'

export default function AuthenticationPanel() {
  return (
    <section className="relative flex min-h-screen w-full min-w-0 max-w-full items-center justify-center overflow-x-clip bg-[#111214] px-4 md:py-24 md:px-6 sm:px-12 md:min-h-140 lg:min-h-screen lg:px-4 lg:py-12 xl:px-16">
      {/* Mobile logo */}
      <div className="absolute left-6 top-6 md:hidden">
        <FolioLogo />
      </div>

      <div className="w-full min-w-0 max-w-97.5">
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

        <div className="mt-8.5 flex w-full min-w-0 flex-col gap-2.5">
          <button
            type="button"
            className="flex h-11.75 w-full min-w-0 items-center justify-center gap-2.5 rounded-[9px] border border-white/2.5 bg-[#242527] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#2b2c2f]"
          >
            <img
              src="/google.png"
              alt=""
              className="h-5 w-5 shrink-0 object-contain"
            />
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            className="flex h-11.75 w-full min-w-0 items-center justify-center gap-2.5 rounded-[9px] border border-white/4.5 bg-[#191a1d] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#202125]"
          >
            <img
              src="/discord.png"
              alt=""
              className="h-5 w-5 shrink-0 object-contain"
            />
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
  )
}

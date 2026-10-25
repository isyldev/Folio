import AuthenticationPanel from "@/components/ui/page-assets/auth-page/AuthenticationPanel";
import DesktopIllustrationPanel from "@/components/ui/page-assets/auth-page/DesktopIllustrationPanel";

// FIX: Fix width extension bug on mobile screen

export default function AuthPage() {
  return (
    <main className="folio-login relative min-h-screen w-full max-w-full overflow-x-clip bg-[#111214] text-[#e8e8ea]">
      <div className="grid min-h-screen w-full max-w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-[54.9%_45.1%]">
        {/* Desktop illustration panel */}
        <DesktopIllustrationPanel />

        {/* Authentication panel */}
        <AuthenticationPanel />
      </div>
    </main>
  );
}

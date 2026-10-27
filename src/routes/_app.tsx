import { createFileRoute } from '@tanstack/react-router'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/Sidebar'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex justify-center overflow-hidden min-h-screen w-full text-[#e8e8e6]">
        <AppSidebar />
        <Outlet />
      </div>
    </SidebarProvider>
  )
}
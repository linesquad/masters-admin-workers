import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "@/modules/layouts/sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />
      <SidebarInset>
        <main className="flex-1">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

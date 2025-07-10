import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "@/modules/layouts/sidebar/Sidebar";
import type { UserTypes } from "@/modules/auth/types/userTypes";
export default function Layout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserTypes;
}) {
  return (
    <SidebarProvider>
      <SideBar user={user} />
      <SidebarInset>
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

import SideBarLayout from "@/modules/layouts/sidebar/SidebarLayout";
import Header from "@/modules/layouts/Header";
import type { UserTypes } from "@/modules/auth/types/userTypes";

function MainLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserTypes;
}) {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <SideBarLayout user={user}>
          <Header />
          <main className="flex-1">{children}</main>
        </SideBarLayout>
      </div>
    </div>
  );
}

export default MainLayout;

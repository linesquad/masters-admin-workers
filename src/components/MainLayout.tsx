import SideBarLayout from "@/modules/layouts/sidebar/SidebarLayout";
import Header from "@/modules/layouts/Header";
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <SideBarLayout>
          <Header />
          <main className="flex-1">{children}</main>
        </SideBarLayout>
      </div>
    </div>
  );
}

export default MainLayout;

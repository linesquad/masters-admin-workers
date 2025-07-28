import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import DashboardUser from "./dashboard-user";
import { mainItems } from "@/lib/admin-dashboard";
import type { UserTypes } from "@/modules/auth/types/userTypes";
import { masterMainItems } from "@/lib/master-dashboard";
import { Link, useLocation } from "@tanstack/react-router";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import Languages from "@/components/labguages";

const activeLinkProps = {
  activeProps: {
    className: "text-white",
  },
  inactiveProps: {
    className: "text-white/70",
  },
};

export function SideBar({ user }: { user: UserTypes }) {
  const { setOpenMobile } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname, setOpenMobile]);

  if (!user)
    return (
      <div className="animate-pulse space-y-4 p-4">
        <div className="h-8 w-32 rounded bg-gray-200" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 rounded bg-gray-200" />
          ))}
        </div>
      </div>
    );

  return (
    <Sidebar className="bg-gradient-to-b from-[#2D5BE3] to-[#1E40AF] text-white [&_[data-mobile=true]]:bg-gradient-to-b [&_[data-mobile=true]]:from-[#2D5BE3] [&_[data-mobile=true]]:to-[#1E40AF] [&_[data-mobile=true]]:text-white">
      <SidebarHeader className="border-b border-white/20">
        <div className="flex items-center p-4">
          <button
            onClick={() => setOpenMobile(false)}
            className="md:hidden mr-4"
            aria-label="Toggle sidebar"
          >
            <XIcon />
          </button>
          <h2 className="text-lg font-semibold text-white">Cirkle Panel</h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70">
            {user?.role === "admin" ? "Admin" : "Master"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {user?.role === "admin" &&
                mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="text-white hover:bg-white/10 data-[active=true]:bg-white/20"
                    >
                      <Link
                        activeOptions={{ exact: true }}
                        {...activeLinkProps}
                        to={item.url}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              {user?.role === "master" &&
                masterMainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="text-white hover:bg-white/10 data-[active=true]:bg-white/20"
                    >
                      <Link
                        activeOptions={{ exact: true }}
                        {...activeLinkProps}
                        to={item.url}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Languages />
        {/* Logout */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-white hover:bg-white/10"
                >
                  <DashboardUser />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

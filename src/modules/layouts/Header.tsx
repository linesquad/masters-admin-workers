import { SidebarTrigger } from "@/components/ui/sidebar";
import { PanelLeft } from "lucide-react";

function Header() {
  return (
    <nav className="bg-white shadow-sm border-b py-3">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="h-10 w-10 hover:bg-gray-100 rounded-md">
          <PanelLeft className="h-4 w-4" />
        </SidebarTrigger>
      </div>
    </nav>
  );
}

export default Header;

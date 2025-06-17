import { useUser } from "@/modules/auth/hooks/useUser";
import { useLogout } from "@/modules/auth/hooks/useLogout";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const DashboardUser = () => {
  const { data: user, isLoading, isError } = useUser();
  const { mutate: logout } = useLogout();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    logout();
  };

  if (isLoading || isError || !user) {
    return (
      <div className="rounded-lg border border-white/10 p-3 w-full flex items-center justify-center bg-white/5">
        <User className="size-6" />
        <span className="ml-2 text-sm">Loading...</span>
      </div>
    );
  }

  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email[0].toUpperCase();
    }
    return "U";
  };

  const initials = getInitials(user.fullName, user.email);
  const displayName = user.fullName || user.email || "User";
  const displayEmail = user.email || "";

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <button className="rounded-lg border border-white/10 p-3 w-full flex items-center justify-center bg-white/5 hover:bg-white/10 overflow-hidden gap-x-2 text-white">
            <div className="size-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
              {initials}
            </div>
            <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
              <p className="text-sm w-full truncate">{displayName}</p>
              {displayEmail && (
                <p className="text-xs truncate w-full opacity-70">
                  {displayEmail}
                </p>
              )}
            </div>
            <ChevronDown className="size-4 shrink-0" />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{displayName}</DrawerTitle>
            {displayEmail && (
              <DrawerDescription>{displayEmail}</DrawerDescription>
            )}
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="size-4 mr-2" />
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-lg border border-white/10 p-3 w-full flex items-center justify-center bg-white/5 hover:bg-white/10 overflow-hidden gap-x-2 text-white">
          <div className="size-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
            {initials}
          </div>
          <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm w-full truncate">{displayName}</p>
            {displayEmail && (
              <p className="text-xs truncate w-full opacity-70">
                {displayEmail}
              </p>
            )}
          </div>
          <ChevronDown className="size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="font-medium truncate">{displayName}</span>
            {displayEmail && (
              <span className="text-sm text-muted-foreground truncate">
                {displayEmail}
              </span>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer flex items-center justify-between"
        >
          Logout
          <LogOut className="size-4 ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUser;

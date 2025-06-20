import type { ReactNode } from "react";
import { useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DrawerSheetProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sheetClassName?: string;
  drawerClassName?: string;
  side?: "top" | "right" | "bottom" | "left";
}

export function DrawerSheet({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  sheetClassName = "w-[400px] sm:w-[540px]",
  drawerClassName = "bg-white",
  side = "right",
}: DrawerSheetProps) {
  const isMobile = useIsMobile();

  // Handle focus management when drawer/sheet opens
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      onOpenChange(newOpen);
      if (newOpen) {
        // Remove focus from the trigger button to prevent the aria-hidden conflict
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    },
    [onOpenChange]
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className={drawerClassName}>
          <DrawerHeader className="text-left px-6 py-4">
            <DrawerTitle className="text-slate-900 text-xl font-semibold">
              {title}
            </DrawerTitle>
            {description && (
              <DrawerDescription className="text-slate-600">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        className={`bg-white text-slate-900 flex flex-col h-full ${sheetClassName}`}
      >
        <SheetHeader className="px-6 py-6 border-b border-slate-200 flex-shrink-0">
          <SheetTitle className="text-slate-900 text-xl font-semibold">
            {title}
          </SheetTitle>
          {description && (
            <SheetDescription className="text-slate-600">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}

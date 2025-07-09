import {
  DrawerHeader,
  DrawerContent,
  Drawer,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { JobAddForm } from "./job-add-form";
import { Plus } from "lucide-react";
import type { Category } from "@/modules/admin/category/types/category";
import type { CreateJobFormData } from "../../../types/jobs";

export function JobAddHeaderDrawer({
  isOpen,
  setIsOpen,
  handleCreateJob,
  categories,
  isPending,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleCreateJob: (data: CreateJobFormData) => void;
  categories: Category[];
  isPending: boolean;
}) {
  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="w-4 h-4" />
            <span>Add Job</span>
          </button>
        </DrawerTrigger>
        <DrawerContent
          className="max-h-[85vh] bg-white flex flex-col"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <DrawerHeader className="text-center pb-0 shrink-0">
            <DrawerTitle className="text-xl font-bold text-black">
              Create New Job
            </DrawerTitle>
            <DrawerDescription className="text-gray-800">
              Add a new job posting to your categories
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <JobAddForm
              handleCreateJob={handleCreateJob}
              categories={categories}
              isPending={isPending}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

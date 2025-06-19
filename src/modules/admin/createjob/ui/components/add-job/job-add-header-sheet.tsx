import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { JobAddForm } from "./job-add-form";
import type { CreateJobFormData } from "../../../types/jobs";
import type { Category } from "@/modules/admin/category/types/category";

export function JobAddHeaderSheet({
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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r
                   from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600
                    hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Add Job
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md bg-white flex flex-col"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <SheetHeader className="pb-6 shrink-0">
            <SheetTitle className="text-xl font-bold text-black text-left">
              Create New Job
            </SheetTitle>
            <SheetDescription className="text-gray-800 text-left">
              Add a new job posting to your categories
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <JobAddForm
              handleCreateJob={handleCreateJob}
              categories={categories}
              isPending={isPending}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

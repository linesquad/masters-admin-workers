import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { EditJobForm } from "./edit-job-form";
import type { Job, UpdateJobFormData } from "../../../types/jobs";
import type { Category } from "@/modules/admin/category/types/category";

export function EditJobHeaderSheet({
  isOpen,
  setIsOpen,
  handleUpdateJob,
  categories,
  isPending,
  job,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleUpdateJob: (data: UpdateJobFormData) => void;
  categories: Category[];
  isPending: boolean;
  job: Job;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-white flex flex-col"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader className="pb-6 shrink-0">
          <SheetTitle className="text-xl font-bold text-black text-left">
            Edit Job
          </SheetTitle>
          <SheetDescription className="text-gray-800 text-left">
            Update the job posting information
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <EditJobForm
            handleUpdateJob={handleUpdateJob}
            categories={categories}
            isPending={isPending}
            onClose={() => setIsOpen(false)}
            job={job}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
} 
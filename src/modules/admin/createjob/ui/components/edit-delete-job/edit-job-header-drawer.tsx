import {
  DrawerHeader,
  DrawerContent,
  Drawer,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { EditJobForm } from "./edit-job-form";
import type { Category } from "@/modules/admin/category/types/category";
import type { Job, UpdateJobFormData } from "../../../types/jobs";

export function EditJobHeaderDrawer({
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
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        className="max-h-[85vh] bg-white flex flex-col"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DrawerHeader className="text-center pb-0 shrink-0">
          <DrawerTitle className="text-xl font-bold text-black">
            Edit Job
          </DrawerTitle>
          <DrawerDescription className="text-gray-800">
            Update the job posting information
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <EditJobForm
            handleUpdateJob={handleUpdateJob}
            categories={categories}
            isPending={isPending}
            onClose={() => setIsOpen(false)}
            job={job}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
} 
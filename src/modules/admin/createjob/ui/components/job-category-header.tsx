import type { Category } from "@/modules/admin/category/types/category";
import { Briefcase } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCreateJobInCategory } from "../../hooks/useCreateJobInCategory";
import type { CreateJobFormData } from "../../types/jobs";
import { JobAddHeaderSheet } from "./add-job/job-add-header-sheet";
import { JobAddHeaderDrawer } from "./add-job/job-add-header-drawer";

export function JobCategoryHeader({ categories }: { categories: Category[] }) {
  const { mutate: createJob, isPending } = useCreateJobInCategory();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleCreateJob = (jobData: CreateJobFormData) => {
    createJob(jobData);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Job Categories
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">
                Explore {categories.length} categories and find perfect job
                opportunities
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 shrink-0">
            {isMobile ? (
              <JobAddHeaderDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleCreateJob={handleCreateJob}
                categories={categories}
                isPending={isPending}
              />
            ) : (
              <JobAddHeaderSheet
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleCreateJob={handleCreateJob}
                categories={categories}
                isPending={isPending}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

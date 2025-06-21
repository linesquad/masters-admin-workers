import { JobSkeleton } from "./job-skeleton";
import type { Job } from "@/modules/admin/createjob/types/jobs";
import { User, ChevronRight, Calendar } from "lucide-react";

export  function MasterJobSelection({
  jobsLoading,
  jobsError,
  jobsData,
  handleJobSelect,
}: {
  jobsLoading: boolean;
  jobsError: boolean;
  jobsData: { data: Job[] } | undefined;
  handleJobSelect: (job: Job) => void;
}) {
  // Loading state
  if (jobsLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <JobSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Error state
  if (jobsError) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">
            Failed to load jobs. Please try again.
          </p>
        </div>
      </div>
    );
  }

  // No data received
  if (!jobsData || !jobsData.data) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <p className="text-yellow-600 text-lg font-medium mb-2">
            No data received
          </p>
          <p className="text-yellow-500">
            The API call completed but returned no data
          </p>
        </div>
      </div>
    );
  }

  // Empty data (no jobs in category)
  if (jobsData.data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 text-lg font-medium mb-2">
            No jobs available in this category
          </p>
          <p className="text-gray-500">
            Try selecting a different category or check back later
          </p>
        </div>
      </div>
    );
  }

  // Success state - render jobs
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
      {jobsData.data.map((job: Job) => (
        <div
          key={job.id}
          onClick={() => handleJobSelect(job)}
          className="group cursor-pointer relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="relative bg-white rounded-lg p-5 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <User className="w-5 h-5 text-white" />
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                {job.title.en}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {job.description.en}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">🇬🇪</span>
                  <span className="text-gray-600 font-medium">
                    {job.title.ka}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-red-600">🇷🇺</span>
                  <span className="text-gray-600 font-medium">
                    {job.title.ru}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{job.masterCount} masters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

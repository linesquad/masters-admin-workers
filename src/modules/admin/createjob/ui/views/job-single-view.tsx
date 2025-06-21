import { useDeleteJobInCategory } from "../../hooks/useDeleteJobInCategory";
import { useGetJobByCategoryId } from "../../hooks/useGetJobByCategoryId";
import { useUpdateJobInCategory } from "../../hooks/useUpdateJobInCagtegory";
import type { UpdateJobFormData } from "../../types/jobs";
import { JobCards } from "../components/job-cards";
import { Route } from "@/routes/_authenticated/(admin)/create-jobs/$id";

export function JobSingleView() {
  const { id } = Route.useParams();
  const { data: jobsData, isLoading, isError, error } = useGetJobByCategoryId(id);
  const { mutate: deleteJob } = useDeleteJobInCategory();
  const { mutate: updateJob } = useUpdateJobInCategory();
  console.log(jobsData);
  const handleEditJob = (data: UpdateJobFormData) => {
    updateJob(data);
  };

  const handleDeleteJob = (categoryId: string, jobId: string) => {
    deleteJob({ categoryId, jobId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Job Listings
          </h1>
          <p className="text-gray-600">Manage job postings for this category</p>
        </div>

        <JobCards
          jobs={jobsData?.data || []}
          onEdit={handleEditJob}
          onDelete={handleDeleteJob}
          isLoading={isLoading}
          error={isError ? error : null}
        />
      </div>
    </div>
  );
}

import { EditJobEmpty } from "./edit-delete-job/edit-delete-job-empty";
import { EditJobError } from "./edit-delete-job/edit-delete-job-error";
import { EditJobCard } from "./edit-delete-job/edit-delete-job-card";
import { CategorySkeleton } from "@/modules/admin/category/ui/components/category-skeleton";
import type { JobCardsProps } from "../../types/jobs";

export function JobCards({
  jobs,
  onEdit,
  onDelete,
  isLoading,
  error,
}: JobCardsProps) {
  if (isLoading) {
    return (
      <div className="">
        {Array.from({ length: 1 }, (_, i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) {
    return <EditJobError error={error} />;
  }
  if (!jobs || jobs.length === 0) {
    return <EditJobEmpty />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <EditJobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

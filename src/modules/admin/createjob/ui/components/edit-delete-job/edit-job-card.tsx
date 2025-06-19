import { Edit, Calendar } from "lucide-react";

import { useState } from "react";
import type { Job } from "../../../types/jobs";
import { DeleteJobDialog } from "./delete-job-dialog";

export function EditJobCard({
  job,
  onEdit,
  onDelete,
}: {
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (categoryId: string, jobId: string) => void;
}) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDeleteConfirm = ({
    job,
    onEdit,
    onDelete,
  }: {
    job: Job;
    onEdit: (job: Job) => void;
    onDelete: (categoryId: string, jobId: string) => void;
  }) => {
    onDelete(job.categoryId, job.id);
    setIsDeleteDialogOpen(false);
  };
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-6">
        {/* Header with job title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 shrink-0">
            <span className="text-2xl">💼</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
              {job.title.en}
            </h3>
          </div>
        </div>

        {/* Multi-language titles */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-green-100 rounded-md flex items-center justify-center">
              <span className="text-xs">🇬🇪</span>
            </div>
            <span className="text-gray-700 font-medium truncate">
              {job.title.ka}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-red-100 rounded-md flex items-center justify-center">
              <span className="text-xs">🇷🇺</span>
            </div>
            <span className="text-gray-700 font-medium truncate">
              {job.title.ru}
            </span>
          </div>
        </div>

        {/* Job description preview */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {job.description.en}
          </p>
        </div>

        {/* Job metadata */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-4 h-4 flex items-center justify-center text-purple-600">
              👨‍💼
            </span>
            <span>{job.masterCount} masters assigned</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Created {formatDate(job.createdAt)}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <button
            onClick={() => onEdit(job)}
            className="cursor-pointer flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium group/btn"
          >
            <Edit className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-sm">Edit</span>
          </button>

          <DeleteJobDialog
            isDeleteDialogOpen={isDeleteDialogOpen}
            setIsDeleteDialogOpen={setIsDeleteDialogOpen}
            job={job}
            onEdit={onEdit}
            onDelete={onDelete}
            handleDeleteConfirm={() =>
              handleDeleteConfirm({ job, onEdit, onDelete })
            }
          />
        </div>
      </div>
    </div>
  );
}

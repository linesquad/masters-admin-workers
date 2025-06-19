import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import type { Job } from "../../../types/jobs";

export function DeleteJobDialog({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  job,
  onEdit,
  onDelete,
  handleDeleteConfirm,
}: {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (categoryId: string, jobId: string) => void;
  handleDeleteConfirm: ({
    job,
    onEdit,
    onDelete,
  }: {
    job: Job;
    onEdit: (job: Job) => void;
    onDelete: (categoryId: string, jobId: string) => void;
  }) => void;
}) {
  return (
    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <AlertDialogTrigger asChild>
        <button className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-all duration-200 group/btn">
          <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border-0 shadow-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Trash2 className="w-4 h-4 text-white" />
            </div>
            Delete Job
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 leading-relaxed mt-2">
            Are you sure you want to delete the job{" "}
            <span className="font-semibold text-gray-900">
              "{job.title.en}"
            </span>
            ? This action cannot be undone and will permanently remove the job
            posting along with all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel className="cursor-pointer border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all duration-200">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteConfirm({ job, onEdit, onDelete })}
            className="cursor-pointer bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Delete Job
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

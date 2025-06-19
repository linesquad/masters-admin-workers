import { useMutation } from "@tanstack/react-query";
import { deleteJobInCategory } from "../services/jobs";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteJobInCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      categoryId,
      jobId,
    }: {
      categoryId: string;
      jobId: string;
    }) => deleteJobInCategory(categoryId, jobId),
    onSuccess: (_, { categoryId }) => {
      // Invalidate the categories query to update job counts
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      // Invalidate the specific category's jobs query to refresh the job list
      queryClient.invalidateQueries({ queryKey: ["jobByCategoryId", categoryId] });
      toast.success("Job deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete job");
    },
  });
};

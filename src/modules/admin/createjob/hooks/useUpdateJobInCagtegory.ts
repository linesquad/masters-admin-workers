import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJobInCategory } from "../services/jobs";
import toast from "react-hot-toast";

export const useUpdateJobInCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      categoryId,
      jobId,
      jobData,
    }: {
      categoryId: string;
      jobId: string;
      jobData: {
        title: {
          en: string;
          ru: string;
          ka: string;
        };
        description: {
          en: string;
          ru: string;
          ka: string;
        };
      };
    }) => updateJobInCategory(categoryId, jobId, jobData),
    onSuccess: (_, { categoryId }) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({
        queryKey: ["jobByCategoryId", categoryId],
      });
      toast.success("Job updated successfully");
    },
    onError: () => {
      toast.error("Failed to update job");
    },
  });
};

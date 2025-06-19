import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobInCategory } from "../services/jobs";
import toast from "react-hot-toast";

export const useCreateJobInCategory = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (jobData: {
      categoryId: string;
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
    }) => createJobInCategory(jobData),
    onSuccess: (_, { categoryId }) => {
      // Invalidate the categories query to update job counts
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      // Invalidate the specific category's jobs query to refresh the job list
      queryClient.invalidateQueries({ queryKey: ["jobByCategoryId", categoryId] });
      toast.success("Job created successfully");
    },
    onError: () => {
      toast.error("Failed to create job");
    },
  });
};

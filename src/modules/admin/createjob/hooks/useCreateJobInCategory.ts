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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Job created successfully");
    },
    onError: () => {
      toast.error("Failed to create job");
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReport } from "../api/reports";
import { toast } from "react-hot-toast";

export const useDeleteReport = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteReport(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
      toast.success("Report deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete report");
    },
  });

  return {
    mutate,
    isPending,
  };
};

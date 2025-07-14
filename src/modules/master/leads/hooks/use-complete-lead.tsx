import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeLead, type CompleteLeadParams } from "../api/leads";
import { toast } from "react-hot-toast";

export const useCompleteLead = () => {
  const queryClient = useQueryClient();
  const { mutate: completeLeadMutate, isPending } = useMutation({
    mutationFn: ({ leadId, price }: CompleteLeadParams) =>
      completeLead({ leadId, price }),
    onSuccess: () => {
      toast.success("Lead completed successfully");
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: () => {
      toast.error("Failed to complete lead");
    },
  });

  return { completeLeadMutate, isPending };
};

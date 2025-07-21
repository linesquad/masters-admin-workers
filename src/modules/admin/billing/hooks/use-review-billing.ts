import { useMutation } from "@tanstack/react-query";
import {
  reviewBilling,
  type ReviewBillingProps,
} from "../api/get-billing-stats";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useReviewBilling = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: ({ billingId, status, adminNote }: ReviewBillingProps) =>
      reviewBilling({ billingId, status, adminNote }),
    onSuccess: () => {
      toast.success("Billing reviewed successfully");
      queryClient.invalidateQueries({ queryKey: ["billing-stats"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending, error, isError };
};

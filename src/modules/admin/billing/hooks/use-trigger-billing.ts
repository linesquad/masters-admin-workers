import { useMutation } from "@tanstack/react-query";
import { billingTrigger } from "../api/get-billing-stats";
import { toast } from "react-hot-toast";

export const useTriggerBilling = () => {
  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: billingTrigger,
    onSuccess: ({ message, billedMasters }) => {
      toast.success(`${message}, ${billedMasters} masters billed`);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending, error, isError };
};

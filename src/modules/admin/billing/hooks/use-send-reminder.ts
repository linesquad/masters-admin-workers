import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendReminder } from "../api/get-billing-stats";
import { toast } from "react-hot-toast";

export const useSendReminder = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (billingId: string) => sendReminder(billingId),
    onSuccess: () => {
      toast.success("Reminder sent successfully");
      queryClient.invalidateQueries({ queryKey: ["billing-stats"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
};

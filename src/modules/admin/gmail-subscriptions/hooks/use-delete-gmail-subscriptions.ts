import { useMutation } from "@tanstack/react-query";
import { deleteGmailSubscription } from "../api/subscriptions";

export const useDeleteGmailSubscription = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteGmailSubscription(id),
  });

  return {
    mutate,
    isPending,
  };
};

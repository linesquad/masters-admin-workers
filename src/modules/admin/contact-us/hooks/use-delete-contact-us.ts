import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContactUs } from "../api/contact-get";
import { toast } from "react-hot-toast";

export const useDeleteContactUs = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteContactUs(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact-us"] });
      toast.success("Contact deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete contact");
    },
  });

  return {
    mutate,
    isPending,
  };
};

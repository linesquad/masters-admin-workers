import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcceptDeclineLead, LeadStatus } from "../api/leads";
import { toast } from "react-hot-toast";
import { useRouter } from "@tanstack/react-router";
import { AxiosError } from "axios";

export function useAcceptDeclineLead() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: acceptDeclineLead, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: LeadStatus }) =>
      AcceptDeclineLead(id, status),
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      queryClient.invalidateQueries({ queryKey: ["lead", data.id] });
      toast.success("Lead accepted/declined successfully");
      router.navigate({ to: "/master/leads" });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("Failed to accept/decline lead");
      }
    },
  });

  return { acceptDeclineLead, isPending };
}

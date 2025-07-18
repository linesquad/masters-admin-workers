import { useMutation } from "@tanstack/react-query";
import {
  createMasterReply,
  type CreateMasterReplyBody,
} from "../api/master-reviews";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useReplyReviewMaster = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: CreateMasterReplyBody) => createMasterReply(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["master-reviews", "reviews"],
      });
      toast.success("Reply added successfully");
    },
    onError: () => {
      toast.error("Failed to add reply");
    },
  });
};

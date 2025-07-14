import { useMutation } from "@tanstack/react-query";
import {
  awardMasterPoints,
  type AwardMasterPointsParams,
} from "../api/get-all-masters";
import { toast } from "react-hot-toast";

export const useAwardMasterPoints = () => {
  return useMutation({
    mutationFn: (params: AwardMasterPointsParams) => awardMasterPoints(params),
    onSuccess: () => {
      toast.success("Points awarded successfully");
    },
    onError: () => {
      toast.error("Failed to award points");
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { uploadMasterProof } from "../api/master-billings";
import type { MasterBillingInput } from "../schemas";
import { toast } from "react-hot-toast";

export const useUploadProof = () => {
  return useMutation({
    mutationFn: (data: MasterBillingInput) => uploadMasterProof(data),
    onSuccess: () => {
      toast.success("Proof uploaded successfully");
    },
    onError: () => {
      toast.error("Failed to upload proof");
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../services/auth";
import toast from "react-hot-toast";
import { useRouter } from "@tanstack/react-router";

export const useLogout = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Successfully signed out");
      router.navigate({ to: "/login" });
    },
    onError: () => {
      toast.error("Failed to sign out");
    },
  });
};

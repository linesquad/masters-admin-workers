import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth";
import toast from "react-hot-toast";
import { useRouter } from "@tanstack/react-router";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      toast.success("Successfully signed in");
      router.navigate({ to: "/" });
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};

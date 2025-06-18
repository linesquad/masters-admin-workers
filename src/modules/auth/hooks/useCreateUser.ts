import { createUser } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({
      email,
      password,
      fullName,
      phone,
      role,
    }: {
      email: string;
      password: string;
      fullName: string;
      phone: string;
      role: string;
    }) => createUser({ email, password, fullName, phone, role }),
    onSuccess: () => {
      toast.success("User created successfully");
    },
    onError: () => {
      toast.error("Failed to create user");
    },
  });
};

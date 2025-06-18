import type { UseFormRegister, UseFormHandleSubmit, FieldErrors } from "react-hook-form";

export type RegisterFormData = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  role: "admin" | "master" | "client";
};

export type RegisterFormProps = {
  register: UseFormRegister<RegisterFormData>;
  handleSubmit: UseFormHandleSubmit<RegisterFormData>;
  onSubmit: (data: RegisterFormData) => void;
  errors: FieldErrors<RegisterFormData>;
  isSubmitting: boolean;
  isPending: boolean;
  selectedRole: string | undefined;
  setValue: (name: "role", value: "admin" | "master" | "client") => void;
};

import { redirect } from "@tanstack/react-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/modules/auth/schema/registerSchema";
import type { RegisterFormData } from "@/modules/auth/types/registerTypes";
import { useCreateUser } from "@/modules/auth/hooks/useCreateUser";
import RegisterForm from "@/modules/auth/components/RegisterForm";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "admin") {
      throw redirect({ to: "/master" });
    }
    return { role };
  },
});

function RouteComponent() {
  const { mutate: createUser, isPending } = useCreateUser();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      phone: "+995",
      role: "" as "admin" | "master" | "client",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RegisterFormData) => {
    createUser(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Create User
            </h1>
            <p className="text-gray-600">
              Add a new user to the system with their details and role
            </p>
          </div>
          <RegisterForm 
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
            isPending={isPending}
            selectedRole={selectedRole}
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  );
}

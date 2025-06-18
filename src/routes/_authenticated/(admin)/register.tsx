import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormData,
} from "@/modules/auth/schema/registerSchema";
import { useCreateUser } from "@/modules/auth/hooks/useCreateUser";

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
      role: undefined,
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RegisterFormData) => {
    createUser(data);
    reset();
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                User Role
              </label>
              <Select
                value={selectedRole}
                onValueChange={(value) =>
                  setValue("role", value as "admin" | "master" | "user")
                }
              >
                <SelectTrigger className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className="bg-[#2751CF] text-white">
                  <SelectItem value="admin" className="cursor-pointer">
                    Admin
                  </SelectItem>
                  <SelectItem value="master" className="cursor-pointer">
                    Master
                  </SelectItem>
                  <SelectItem value="user" className="cursor-pointer">
                    User
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || isPending}
                className="w-full md:w-auto px-8 py-2 bg-[#2751CF] hover:bg-[#2751CF]/80 transition-colors text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting || isPending ? "Creating User..." : "Create User"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

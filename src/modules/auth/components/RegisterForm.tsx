import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RegisterFormProps } from "@/modules/auth/types/registerTypes";

function RegisterForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  isPending,
  selectedRole,
  setValue,
}: RegisterFormProps) {
  return (
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
            <p className="text-sm text-red-600">{errors.password.message}</p>
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
            <p className="text-sm text-red-600">{errors.fullName.message}</p>
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
          value={selectedRole || ""}
          onValueChange={(value) =>
            setValue("role", value as "admin" | "master" | "client")
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
            <SelectItem value="client" className="cursor-pointer">
              Client
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
  );
}

export default RegisterForm;

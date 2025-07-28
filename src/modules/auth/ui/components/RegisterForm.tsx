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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("createUser.emailAddress")}
          </label>
          <Input
            id="email"
            type="email"
            placeholder={t("createUser.enterEmailAddress")}
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
            {t("createUser.password")}
          </label>
          <Input
            id="password"
            type="password"
            placeholder={t("createUser.enterPassword")}
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
            {t("createUser.fullName")}
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder={t("createUser.enterFullName")}
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
            {t("createUser.phoneNumber")}
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
          {t("createUser.userRole")}
        </label>
        <Select
          value={selectedRole || ""}
          onValueChange={(value) =>
            setValue("role", value as "admin" | "master" | "client")
          }
        >
          <SelectTrigger className="w-full border-gray-300 focus-visible:border-[#2751CF] focus-visible:ring-[#2751CF]/20 hover:border-[#2751CF]/60 transition-colors">
            <SelectValue placeholder={t("createUser.selectRole")} />
          </SelectTrigger>
          <SelectContent className="bg-[#2751CF] text-white">
            <SelectItem
              value="admin"
              className=" hover:bg-white hover:text-[#2751CF] transition-colors"
            >
              {t("createUser.admin")}
            </SelectItem>
            <SelectItem
              value="master"
              className=" hover:bg-white hover:text-[#2751CF] transition-colors"
            >
              {t("createUser.master")}
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
          {isSubmitting || isPending
            ? t("createUser.creatingUser")
            : t("createUser.createUser")}
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;

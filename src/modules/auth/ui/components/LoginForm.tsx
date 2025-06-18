import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { LoginFormData } from "@/modules/auth/schema/loginSchema";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

function LoginForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isPending,
}: {
  register: UseFormRegister<LoginFormData>;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  onSubmit: (data: LoginFormData) => void;
  errors: FieldErrors<LoginFormData>;
  isPending: boolean;
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:px-8 px-4 py-5 flex flex-col gap-4"
    >
      <div>
        <label htmlFor="email" className="block pb-2 font-medium text-sm">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="m@example.com"
          className="focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-black/25"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block pb-2 font-medium text-sm">
          Password
        </label>
        <Input
          type="password"
          id="password"
          placeholder="********"
          className="focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-black/25"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full cursor-pointer bg-[#2D5BE3] hover:bg-[#2D5BE3]/90 text-white font-normal disabled:opacity-50"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}

export default LoginForm;

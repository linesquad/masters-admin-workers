import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoLight from "@/assets/logo_light.svg";
import heroImage from "@/assets/hero_1.jpg";
import { getUser, getUserRole } from "@/modules/auth/services/auth";
import { redirect } from "@tanstack/react-router";
import { useLogin } from "@/modules/auth/hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormData,
} from "@/modules/auth/schema/loginSchema";

export const Route = createFileRoute({
  component: LoginForm,
  loader: async () => {
    const user = await getUser().catch(() => null);
    const role = await getUserRole().catch(() => null);
    if (user) {
      throw redirect({ to: `/` });
    }
    return { user, role };
  },
});

function LoginForm() {
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex w-full justify-center max-w-4xl">
        <div
          className="w-full max-w-[380px] min-w-[280px] pt-10 border h-[450px]
       border-gray-300 rounded-l-2xl sm:rounded-l-2xl rounded-r-2xl sm:rounded-r-none bg-white"
        >
          <h1 className="text-2xl font-bold text-center">Welcome back</h1>
          <h2 className="text-sm font-light text-center">
            Login to your account
          </h2>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block pb-2 font-medium text-sm"
              >
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
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
        </div>
        <div className="bg-[#2D5BE3] w-[35%]  items-center justify-center rounded-r-2xl hidden sm:flex">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={logoLight} alt="login" className="w-[120px]" />
            <p className="text-white text-2xl font-bold">Irkle.P</p>
          </div>
        </div>
      </div>
    </section>
  );
}

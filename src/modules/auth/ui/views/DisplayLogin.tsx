import { useLogin } from "@/modules/auth/hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormData,
} from "@/modules/auth/schema/loginSchema";
import logoLight from "@/assets/logo_light.svg";
import heroImage from "@/assets/hero_1.jpg";
import LoginForm from "../components/LoginForm";

export const DisplayLogin = () => {
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
          <LoginForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            isPending={isPending}
          />
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
};

import { FormField } from "../../components/Form/FormField";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../../schemas/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { SocialLogin } from "../../components/Auth/SocialLogin";
import { AuthLink } from "../../components/Auth/AuthLink";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <>
      <AuthHeading
        title="Login Page 👋"
        subtitle="Please sign in to your account and start the adventure!"
      />

      <form
        className="flex flex-col gap-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          id="email"
          label="Email"
          placeholder="Example: john.doe@gmail.com"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-primary block h-[38px] cursor-pointer rounded-[6px] text-[15px] font-[500] text-white hover:opacity-90"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          {isSubmitting ? "Loading..." : "Sign in"}
        </button>
      </form>

      <AuthLink
        text="Can't remember your password?"
        linkText="Forgot Password?"
        to="/forgot-password"
      />

      <div className="mt-[26px] flex items-center justify-center gap-[26px]">
        <div className="h-[1px] w-[160px] bg-[#DBDADE]"></div>
        <div className="text-secondary text-[13px] font-[400]">or</div>
        <div className="h-[1px] w-[160px] bg-[#DBDADE]"></div>
      </div>

      <SocialLogin />
    </>
  );
};

import { FormField } from "../../components/Form/FormField";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../../schemas/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { SocialLogin } from "../../components/Auth/SocialLogin";
import { AuthLink } from "../../components/Auth/AuthLink";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../../redux/slices/authSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      login({
        accessToken: "123",
        refreshToken: "abc",
      }),
    );
  }, [dispatch]);

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

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          className="bg-primary block h-10 cursor-pointer rounded-[6px] text-sm font-medium text-white hover:opacity-90"
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

      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="h-[1px] w-40 bg-[#DBDADE]"></div>
        <div className="text-secondary text-[13px] font-normal">or</div>
        <div className="h-[1px] w-40 bg-[#DBDADE]"></div>
      </div>

      <SocialLogin />
    </>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField } from "../../components/Form/FormField";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginForm } from "../../schemas/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { SocialLogin } from "../../components/Auth/SocialLogin";
import { AuthLink } from "../../components/Auth/AuthLink";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/rootApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginMutation, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (formData: LoginForm) => {
    loginMutation(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data?.message);
    }

    if (isSuccess) {
      toast.success(data.message);
      navigate("/otp-password", {
        state: {
          email: getValues("email"),
        },
      });
    }
  }, [data?.message, error, getValues, isError, isSuccess, navigate]);

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
          type="text"
          register={register("password")}
          error={errors.password}
        />

        <Link
          to="/forgot-password"
          className="text-secondary hover:text-primary flex justify-end text-sm"
        >
          Forgot password?
        </Link>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-primary block h-10 cursor-pointer rounded-[6px] text-sm font-medium text-white hover:opacity-90"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          {isLoading ? (
            <div className="loading loading-spinner loading-md"></div>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <AuthLink
        text="Don't have an account?"
        linkText="Create account"
        to="/register"
      />

      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="bg-three h-[1px] w-40"></div>
        <div className="text-secondary text-[13px] font-normal">or</div>
        <div className="bg-three h-[1px] w-40"></div>
      </div>

      <SocialLogin />
    </>
  );
};

import { useForm } from "react-hook-form";
import { FormField } from "../../components/Form/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { AuthLink } from "../../components/Auth/AuthLink";
import { SocialLogin } from "../../components/Auth/SocialLogin";
import {
  registerSchema,
  type RegisterForm,
} from "../../schemas/auth/register.schema";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <>
      <AuthHeading
        title="Register Page 🚀"
        subtitle="Make your app management easy and fun!"
      />

      <form
        className="flex flex-col gap-[16px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          id="fullName"
          label="Full Name"
          placeholder="Example: john.doe"
          register={register("fullName")}
          error={errors.fullName}
        />
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
          {isSubmitting ? "Loading..." : "Sign up"}
        </button>
      </form>

      <AuthLink
        text="Already have an account?"
        linkText="Sign in instead"
        to="/login"
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

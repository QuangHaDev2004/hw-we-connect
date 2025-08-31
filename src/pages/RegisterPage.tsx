import { useForm } from "react-hook-form";
import { FormField } from "../components/form/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterForm,
} from "../schemas/auth/register.schema";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";

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
      <div className="min-h-[100vh] py-[90px]">
        <div
          className="mx-auto w-[95%] rounded-[6px] bg-white p-[32px] sm:w-[450px]"
          style={{
            boxShadow: "0px 4px 18px 0px #4B465C1A",
          }}
        >
          {/* Outlet */}
          <div className="mb-[26px]">
            <img
              src="/assets/images/account-logo.svg"
              alt="Logo"
              className="mx-auto mb-[32px] h-[55px] w-[58px] object-cover"
            />
            <h1 className="text-secondary mb-[6px] text-[22px] font-[500]">
              Adventure starts here 🚀
            </h1>
            <p className="text-secondary text-[15px] font-[400]">
              Make your app management easy and fun!
            </p>
          </div>

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

          <div className="text-secondary mt-[16px] text-center text-[15px] font-[400]">
            Already have an account?{" "}
            <a href={""} className="text-primary">
              Sign in instead
            </a>
          </div>

          <div className="mt-[26px] flex items-center justify-center gap-[26px]">
            <div className="h-[1px] w-[160px] bg-[#DBDADE]"></div>
            <div className="text-secondary text-[13px] font-[400]">or</div>
            <div className="h-[1px] w-[160px] bg-[#DBDADE]"></div>
          </div>

          <div className="mt-[26px] flex items-center justify-center gap-[10px]">
            <a
              href={""}
              target="_blank"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#4267B2]/16"
            >
              <FaFacebookF className="text-[#4267B2]" />
            </a>
            <a
              href={""}
              target="_blank"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#1DA1F2]/16"
            >
              <FaTwitter className="text-[#1DA1F2]" />
            </a>
            <a
              href={""}
              target="_blank"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#DB4437]/16"
            >
              <FaGoogle className="text-[#DB4437]" />
            </a>
          </div>
          {/* Outlet */}
        </div>
      </div>
    </>
  );
};

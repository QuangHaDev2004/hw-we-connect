/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { AuthLink } from "../../components/Auth/AuthLink";
import { MuiOtpInput } from "mui-one-time-password-input";
import { otpSchema, type OTPForm } from "../../schemas/auth/otp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOTPMutation } from "../../services/rootApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

export const OTPVerifyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [verifyOTP, { data, isLoading, isError, isSuccess, error }] =
    useVerifyOTPMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPForm>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = (formData: OTPForm) => {
    verifyOTP({
      email: location?.state?.email,
      otp: formData.otp,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data.message);
    }

    if (isSuccess) {
      dispatch(login(data));
      navigate("/");
    }
  }, [data, data?.message, dispatch, error, isError, isSuccess, navigate]);

  return (
    <>
      <AuthHeading
        title="Two-Step Verification 💬"
        subtitle="We sent a verification code to your mobile. Enter the code from the mobile in the field below."
      />

      <p className="text-secondary mb-1.5 text-sm font-semibold">
        Type your 6 digit security code
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Controller
            name="otp"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <MuiOtpInput
                {...field}
                value={field.value}
                onChange={field.onChange}
                length={6}
              />
            )}
          />

          {errors && (
            <p className="mt-1 text-[12px] text-red-500">
              {errors?.otp?.message}
            </p>
          )}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-primary block h-10 w-full cursor-pointer rounded-[6px] text-sm font-medium text-white hover:opacity-90"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          {isLoading ? (
            <div className="loading loading-spinner loading-md"></div>
          ) : (
            "Verify my account"
          )}
        </button>
      </form>

      <AuthLink text="Didn't get the code?" linkText="Resend" to="" />
    </>
  );
};

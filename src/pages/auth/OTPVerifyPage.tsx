import { useForm } from "react-hook-form";
import { AuthHeading } from "../../components/Auth/AuthHeading";
import { AuthLink } from "../../components/Auth/AuthLink";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

export const OTPVerifyPage = () => {
  const [otp, setOtp] = useState("");
  const {
    formState: { isSubmitting },
  } = useForm();

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  return (
    <>
      <AuthHeading
        title="Two-Step Verification 💬"
        subtitle="We sent a verification code to your mobile. Enter the code from the mobile in the field below."
      />

      <p className="text-secondary mb-1.5 text-sm font-semibold">
        Type your 6 digit security code
      </p>

      <form
      // className="flex flex-col gap-[16px]"
      // onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <MuiOtpInput value={otp} onChange={handleChange} length={6} />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-primary block h-10 w-full cursor-pointer rounded-[6px] text-sm font-medium text-white hover:opacity-90"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          {isSubmitting ? "Loading..." : "Verify my account"}
        </button>
      </form>

      <AuthLink text="Didn't get the code?" linkText="Resend" to="" />
    </>
  );
};

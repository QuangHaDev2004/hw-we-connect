import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .nonempty("Vui lòng nhập mã OTP")
    .regex(/^\d+$/, "Mã OTP chỉ được chứa các chữ số"),
});

export type OTPForm = z.infer<typeof otpSchema>;

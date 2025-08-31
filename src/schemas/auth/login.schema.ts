import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Vui lòng nhập email của bạn!")
    .email("Email không đúng định dạng!"),

  password: z
    .string()
    .nonempty("Vui lòng nhập mật khẩu!")
});

export type LoginForm = z.infer<typeof loginSchema>;

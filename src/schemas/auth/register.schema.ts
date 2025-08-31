import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .nonempty("Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),

  email: z
    .string()
    .nonempty("Vui lòng nhập email của bạn!")
    .email("Email không đúng định dạng!"),

  password: z
    .string()
    .nonempty("Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự!")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ký tự viết hoa!")
    .regex(/[a-z]/, "Mật khẩu phải chứa ký tự viết thường!")
    .regex(/[0-9]/, "Mật khẩu phải chứa chữ số!")
    .regex(/[^a-zA-Z0-9\s]/, "Mật khẩu phải chứa ký tự đặc biệt!"),
});

export type RegisterForm = z.infer<typeof registerSchema>;
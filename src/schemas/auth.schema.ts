import { z } from "zod";

export const LoginBody = z.object({
    email: z
        .string()
        .min(1, "Vui lòng nhập email")
        .email("Email không hợp lệ"),

    password: z
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
})

export type LoginBodyType = z.infer<typeof LoginBody>;

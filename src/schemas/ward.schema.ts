import { z } from "zod";

export const WardSchema = z.object({
    key: z.number().optional(),
    district: z.string().min(1, "Vui lòng nhập quận/huyện"),
    ward: z.string().min(1, "Vui lòng nhập tên phường/xã"),
    code: z
        .number("Mã phải là số")
        .min(1, "Mã không hợp lệ"),
});

export type WardType = z.infer<typeof WardSchema>;
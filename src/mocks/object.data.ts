import type { ObjectData } from "@/types/object.type";

export const objectData: ObjectData[] = Array.from({ length: 10 }).map(
    (_, i) => ({
        key: i,
        date: new Date().toISOString().split('T')[0],
        objectType: ["Nước ngoài", "Khám sức khoẻ định cư - du học", "Khám sức khoẻ xuất khẩu lao động", "Trái tuyến", "Thu phí - TT2"][i % 5],
        totalPrice: 200000000,
    })
);
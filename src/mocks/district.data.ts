export type District = {
    key: number;
    province: string;
    code: number;
    name: string;
};

export const districtData: District[] = Array.from({ length: 860 }).map(
    (_, i) => ({
        key: i,
        province: "Hà Nội",
        code: 860 + i,
        name: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"][i % 3],
    })
);
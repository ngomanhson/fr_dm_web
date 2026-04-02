export type ProvinceType = {
    key: number;
    code: number;
    name: string;
};

export const provinceData: ProvinceType[] = Array.from({ length: 75 }).map(
    (_, i) => ({
        key: i,
        code: 75 + i,
        name: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"][i % 3],
    })
);
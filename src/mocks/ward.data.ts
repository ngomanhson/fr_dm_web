export type WardType = {
    key: number;
    ward: string;
    code: number;
};

const wards = [
    "Phúc Xá",
    "Trúc Bạch",
    "Vĩnh Phúc",
    "Cống Vị",
    "Liễu Giai",
    "Ngọc Hà",
    "Đội Cấn",
    "Quán Thánh",
    "Nguyễn Trung Trực",
    "Phan Chu Trinh",
    "Hàng Bạc",
    "Hàng Gai",
    "Hàng Đào",
    "Hàng Bông",
];

export const wardData: WardType[] = Array.from({ length: 18460 }).map(
    (_, i) => ({
        key: i,
        code: 860 + i,
        ward: `Phường ${wards[i % wards.length]}`,
    })
);
import type { WardType } from "@/types/ward.type";

export const districtMap: Record<string, string[]> = {
    "Ba Đình": [
        "Phúc Xá",
        "Trúc Bạch",
        "Vĩnh Phúc",
        "Cống Vị",
        "Liễu Giai",
        "Ngọc Hà",
        "Đội Cấn",
        "Quán Thánh",
        "Nguyễn Trung Trực",
    ],
    "Hoàn Kiếm": [
        "Phan Chu Trinh",
        "Hàng Bạc",
        "Hàng Gai",
        "Hàng Đào",
        "Hàng Bông",
        "Hàng Trống",
        "Cửa Đông",
        "Cửa Nam",
    ],
    "Đống Đa": [
        "Cát Linh",
        "Văn Miếu",
        "Quốc Tử Giám",
        "Láng Thượng",
        "Khâm Thiên",
        "Nam Đồng",
    ],
    "Cầu Giấy": [
        "Dịch Vọng",
        "Dịch Vọng Hậu",
        "Quan Hoa",
        "Nghĩa Đô",
        "Nghĩa Tân",
        "Yên Hòa",
    ],
    "Hai Bà Trưng": [
        "Bạch Đằng",
        "Thanh Lương",
        "Thanh Nhàn",
        "Cầu Dền",
        "Phố Huế",
    ],
};

export const wardData: WardType[] = Object.entries(districtMap).flatMap(
    ([district, wards], districtIndex) =>
        wards.map((ward, wardIndex) => ({
            id: Number(`${districtIndex}${wardIndex}`),
            code: 1000 + districtIndex * 100 + wardIndex,
            district,
            ward,
        }))
);
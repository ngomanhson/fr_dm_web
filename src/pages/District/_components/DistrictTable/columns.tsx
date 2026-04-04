import type { DistrictType } from "@/types/district.type";
import type { ColumnsType } from "antd/es/table";

export const getDistrictColumns = (page: number, pageSize: number): ColumnsType<DistrictType> => [
    {
        title: "STT",
        render: (_, __, index) => (page - 1) * pageSize + index + 1,
        width: 120,
        align: "center",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tên tỉnh/TP",
        dataIndex: "province",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Mã huyện",
        dataIndex: "code",
        align: "center",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tên huyện",
        dataIndex: "name",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
];

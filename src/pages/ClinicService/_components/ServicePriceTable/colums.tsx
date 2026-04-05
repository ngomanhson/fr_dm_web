import dayjs from "dayjs";
import type { ColumnsType } from "antd/es/table";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { ServicePrice } from "../../_types/clinic.type";

interface Props {
    onDelete: (index: number) => void;
}

export const getPriceClinicServiceColumns = ({ onDelete }: Props): ColumnsType<ServicePrice> => [
    {
        title: "STT",
        width: 60,
        align: "center",
        render: (_, __, i) => i + 1,
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Giá DV",
        dataIndex: "priceDV",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Giá BHYT",
        dataIndex: "priceBHYT",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Từ ngày",
        dataIndex: "fromDate",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
        render: (v) => (v ? dayjs(v).format("DD/MM/YYYY") : ""),
    },
    {
        title: "Đến ngày",
        dataIndex: "toDate",
        render: (v) => (v ? dayjs(v).format("DD/MM/YYYY") : ""),
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "BHYT chi trả",
        dataIndex: "bhytPaid",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tỉ lệ BHYT chi trả",
        dataIndex: "bhytRate",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tác vụ",
        width: 100,
        align: "center",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
        render: (_, __, i) => (
            <Button danger type="text" icon={<DeleteOutlined />} onClick={() => onDelete(i)} />
        ),
    },
];

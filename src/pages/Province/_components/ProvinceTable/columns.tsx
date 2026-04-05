import { Button, Popconfirm, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { ProvinceType } from "@/types/province.type";

interface Props {
    page: number;
    pageSize: number;
    onEdit: (record: ProvinceType) => void;
    onDelete: (record: ProvinceType) => void;
}

export const getProvinceColumns = ({
    page,
    pageSize,
    onEdit,
    onDelete,
}: Props): ColumnsType<ProvinceType> => [
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
        title: "Mã tỉnh/TP",
        dataIndex: "code",
        align: "left",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tên tỉnh/TP",
        dataIndex: "name",
        align: "left",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tác vụ",
        key: "action",
        width: 140,
        align: "center",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
        render: (_, record) => (
            <Space size="small">
                <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => onEdit(record)}
                    style={{ color: "#1677ff" }}
                />

                <Popconfirm
                    title="Xoá bản ghi này?"
                    okText="Xoá"
                    cancelText="Huỷ"
                    okButtonProps={{ danger: true }}
                    onConfirm={() => onDelete(record)}
                >
                    <Button type="text" danger icon={<DeleteOutlined />} />
                </Popconfirm>
            </Space>
        ),
    },
];

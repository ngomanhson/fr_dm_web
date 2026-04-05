import { Button, Popconfirm, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { WardType } from "@/types/ward.type";

interface Props {
    page: number;
    pageSize: number;
    onEdit: (record: WardType) => void;
    onDelete: (record: WardType) => void;
}

export const getWardColumns = ({
    page,
    pageSize,
    onEdit,
    onDelete,
}: Props): ColumnsType<WardType> => [
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
        title: "Quận/Huyện",
        dataIndex: "district",
        align: "left",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Mã xã/phường",
        dataIndex: "code",
        align: "left",
        onHeaderCell: () => ({
            className: "table__header-cell",
        }),
    },
    {
        title: "Tên xã/phường",
        dataIndex: "ward",
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

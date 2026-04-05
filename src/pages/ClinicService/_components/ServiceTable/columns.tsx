import type { ColumnsType } from "antd/es/table";
import { Button, Popconfirm, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ClinicService } from "@/pages/ClinicService/_types/clinic.type";
import { formatCurrency } from "@/utils";

interface Props {
    page: number;
    pageSize: number;
    onEdit: (record: ClinicService) => void;
    onDelete: (record: ClinicService) => void;
}

export const getClinicServiceColumns = ({
    page,
    pageSize,
    onEdit,
    onDelete,
}: Props): ColumnsType<ClinicService> => [
    {
        title: "STT",
        render: (_, __, index) => (page - 1) * pageSize + index + 1,
        align: "center",
    },
    { title: "Mã dịch vụ", dataIndex: "id" },
    { title: "Mã dịch vụ BHYT", dataIndex: "insuranceCode" },
    { title: "Cơ sở", dataIndex: "facility" },
    { title: "Tên dịch vụ", dataIndex: "serviceName" },
    { title: "Tên DV BHYT", dataIndex: "insuranceName" },
    { title: "Loại dịch vụ", dataIndex: "serviceType" },
    { title: "Nhóm dịch vụ", dataIndex: "serviceGroup" },
    { title: "Nhóm dịch vụ chi tiết", dataIndex: "serviceGroupDetail" },
    { title: "Đơn vị tính", dataIndex: "unit" },
    {
        title: "Giá DV",
        dataIndex: ["prices", 0, "priceDV"],
        align: "left",
        render: (value) => formatCurrency(value),
    },
    {
        title: "Giá BHYT",
        dataIndex: ["prices", 0, "priceBHYT"],
        align: "left",
        render: (value) => formatCurrency(value),
    },
    {
        title: "Tác vụ",
        key: "action",
        align: "center",
        fixed: "right",
        render: (_: any, record: ClinicService) => (
            <Space size="small">
                <Button
                    type="text"
                    icon={<EditOutlined style={{ color: "#52c41a", fontSize: "16px" }} />}
                    onClick={() => onEdit(record)}
                />

                <Popconfirm
                    title="Bạn chắc chắn muốn xoá không?"
                    okText="Đồng ý"
                    cancelText="Thoát"
                    onConfirm={() => onDelete(record)}
                >
                    <Button type="text" danger icon={<DeleteOutlined />} />
                </Popconfirm>
            </Space>
        ),
    },
];

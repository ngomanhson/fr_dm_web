import type { ColumnsType } from "antd/es/table";
import type { RevenuePaymentMethodType } from "@/types/payment.type";
import { formatCurrency } from "@/utils";
import styles from "./styles.module.scss";

export const getPaymentMethodColumns = (
    page: number,
    pageSize: number,
): ColumnsType<RevenuePaymentMethodType> => [
    {
        title: "STT",
        key: "stt",
        align: "center",
        className: styles.headerBlue,
        render: (_, __, index) => (page - 1) * pageSize + index + 1,
    },
    {
        title: "Ngày",
        dataIndex: "date",
        key: "date",
        align: "center",
        className: styles.headerBlue,
    },
    {
        title: "Hình thức thanh toán",
        align: "center",
        className: styles.headerGreen,
        children: [
            {
                title: "Tiền mặt",
                dataIndex: "cash",
                align: "right",
                className: styles.headerPink,
                render: (val) => formatCurrency(val),
            },
            {
                title: "QRMB Động",
                dataIndex: "qrmbDynamic",
                align: "right",
                className: styles.headerPink,
                render: (val) => formatCurrency(val),
            },
            {
                title: "QRMB Tĩnh",
                dataIndex: "qrmbStatic",
                align: "right",
                className: styles.headerPink,
                render: (val) => formatCurrency(val),
            },
            {
                title: "POS MB",
                dataIndex: "posMb",
                align: "right",
                className: styles.headerPink,
                render: (val) => formatCurrency(val),
            },
            {
                title: "Chuyển khoản khác",
                dataIndex: "transfer",
                align: "right",
                className: styles.headerPink,
                render: (val) => formatCurrency(val),
            },
        ],
    },
    {
        title: "Tổng tiền",
        dataIndex: "totalPrice",
        align: "right",
        className: styles.headerBlue,
        render: (val) => <strong>{formatCurrency(val)}</strong>,
    },
];

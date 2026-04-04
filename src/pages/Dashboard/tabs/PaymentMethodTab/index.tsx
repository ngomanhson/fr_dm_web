import { Button, Table } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import type { ColumnsType } from "antd/es/table";
import PaginationTable from "@/components/PaginationTable";
import { paginatedData, type PaymentData } from "@/mocks/payment.data";
import { FileExcelOutlined } from "@ant-design/icons";
import { formatCurrency } from "@/utils";

export default function PaymentMethodTab() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const total = paginatedData.length;

    const columns: ColumnsType<PaymentData> = [
        {
            title: "STT",
            key: "stt",
            width: 70,
            align: "center",
            className: styles.headerBlue,
            render: (_, __, index) => (page - 1) * pageSize + index + 1,
        },
        {
            title: "Ngày",
            dataIndex: "date",
            key: "date",
            width: 120,
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
    return (
        <div className={styles.wrapper}>
            <Button icon={<FileExcelOutlined />} type="primary" className={styles["export__btn"]}>
                Xuất Excel
            </Button>

            <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={false}
                bordered
                rowKey="key"
                summary={(pageData) => {
                    const totals = pageData.reduce(
                        (acc, record) => ({
                            cash: acc.cash + record.cash,
                            qrmbDynamic: acc.qrmbDynamic + record.qrmbDynamic,
                            qrmbStatic: acc.qrmbStatic + record.qrmbStatic,
                            posMb: acc.posMb + record.posMb,
                            transfer: acc.transfer + record.transfer,
                            totalPrice: acc.totalPrice + record.totalPrice,
                        }),
                        {
                            cash: 0,
                            qrmbDynamic: 0,
                            qrmbStatic: 0,
                            posMb: 0,
                            transfer: 0,
                            totalPrice: 0,
                        },
                    );

                    return (
                        <Table.Summary.Row className={styles.summaryRow}>
                            <Table.Summary.Cell index={0} colSpan={2} align="center">
                                <strong>Tổng</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={2} align="right">
                                <strong>{formatCurrency(totals.cash)}</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={3} align="right">
                                <strong>{formatCurrency(totals.qrmbDynamic)}</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={4} align="right">
                                <strong>{formatCurrency(totals.qrmbStatic)}</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={5} align="right">
                                <strong>{formatCurrency(totals.posMb)}</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={6} align="right">
                                <strong>{formatCurrency(totals.transfer)}</strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={7} align="right">
                                <strong>{formatCurrency(totals.totalPrice)}</strong>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    );
                }}
            />

            <PaginationTable
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
            />
        </div>
    );
}

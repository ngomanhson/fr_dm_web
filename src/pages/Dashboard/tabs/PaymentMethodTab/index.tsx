import { Table, Pagination, Select } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import type { ColumnsType } from "antd/es/table";

interface PaymentData {
    key: string;
    date: string;
    cash: number;
    qrmbDynamic: number;
    qrmbStatic: number;
    posMb: number;
    transfer: number;
    totalPrice: number;
}

export default function PaymentMethodTab() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const paginatedData: PaymentData[] = [
        {
            key: "1",
            date: "04/08/2025",
            cash: 0,
            qrmbDynamic: 683990494.04,
            qrmbStatic: 16752600,
            posMb: 0,
            transfer: 219521392,
            totalPrice: 920264486.04,
        },
    ];

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
                    render: (val) => val.toLocaleString("vi-VN"),
                },
                {
                    title: "QRMB Động",
                    dataIndex: "qrmbDynamic",
                    align: "right",
                    className: styles.headerPink,
                    render: (val) => val.toLocaleString("vi-VN"),
                },
                {
                    title: "QRMB Tĩnh",
                    dataIndex: "qrmbStatic",
                    align: "right",
                    className: styles.headerPink,
                    render: (val) => val.toLocaleString("vi-VN"),
                },
                {
                    title: "POS MB",
                    dataIndex: "posMb",
                    align: "right",
                    className: styles.headerPink,
                    render: (val) => val.toLocaleString("vi-VN"),
                },
                {
                    title: "Chuyển khoản khác",
                    dataIndex: "transfer",
                    align: "right",
                    className: styles.headerPink,
                    render: (val) => val.toLocaleString("vi-VN"),
                },
            ],
        },
        {
            title: "Tổng tiền",
            dataIndex: "totalPrice",
            align: "right",
            className: styles.headerBlue,
            render: (val) => <strong>{val.toLocaleString("vi-VN")}</strong>,
        },
    ];
    return (
        <div className={styles.wrapper}>
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
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.cash)}
                                </strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={3} align="right">
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.qrmbDynamic)}
                                </strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={4} align="right">
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.qrmbStatic)}
                                </strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={5} align="right">
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.posMb)}
                                </strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={6} align="right">
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.transfer)}
                                </strong>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={7} align="right">
                                <strong>
                                    {new Intl.NumberFormat("vi-VN").format(totals.totalPrice)}
                                </strong>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    );
                }}
            />

            <div className={styles.pagination}>
                {/* left */}
                <div className={styles.pagination__left}>
                    <span className={styles.pagination__total}>
                        Tổng: {paginatedData.length} bản ghi
                    </span>

                    <Pagination
                        current={page}
                        pageSize={pageSize}
                        total={paginatedData.length}
                        onChange={(p) => setPage(p)}
                        showSizeChanger={false}
                        className={styles.pagination__antd}
                    />
                </div>

                {/* right */}
                <div className={styles.pagination__right}>
                    <Select
                        value={pageSize}
                        className={styles.pagination__select}
                        options={[
                            { value: 10, label: "10 / trang" },
                            { value: 15, label: "15 / trang" },
                            { value: 20, label: "20 / trang" },
                        ]}
                        onChange={(value) => {
                            setPageSize(value);
                            setPage(1);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

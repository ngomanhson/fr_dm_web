import { Button, Table } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import PaginationTable from "@/components/PaginationTable";
import { paginatedData } from "@/mocks/payment.data";
import { FileExcelOutlined } from "@ant-design/icons";
import { formatCurrency } from "@/utils";
import { getPaymentMethodColumns } from "./columns";
import { calculatePaymentTotals } from "@/helpers/payment";

export default function PaymentMethodTab() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const total = paginatedData.length;
    const columns = getPaymentMethodColumns(page, pageSize);

    return (
        <div className={styles.wrapper}>
            <Button icon={<FileExcelOutlined />} type="primary" className={styles["export__btn"]}>
                Xuất Excel
            </Button>

            <div className={styles.wrapper__table}>
                <Table
                    columns={columns}
                    dataSource={paginatedData}
                    pagination={false}
                    bordered
                    rowKey="id"
                    scroll={{ x: "max-content" }}
                    summary={(pageData) => {
                        const totals = calculatePaymentTotals([...pageData]);

                        return (
                            <Table.Summary.Row className={styles.summaryRow}>
                                <Table.Summary.Cell index={0} colSpan={2} align="center">
                                    Tổng
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={2} align="right">
                                    {formatCurrency(totals.cash)}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={3} align="right">
                                    {formatCurrency(totals.qrmbDynamic)}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={4} align="right">
                                    {formatCurrency(totals.qrmbStatic)}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={5} align="right">
                                    {formatCurrency(totals.posMb)}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={6} align="right">
                                    {formatCurrency(totals.transfer)}
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={7} align="right">
                                    {formatCurrency(totals.totalPrice)}
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        );
                    }}
                />
            </div>

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

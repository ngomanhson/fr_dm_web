import { Table } from "antd";
import { useState } from "react";
import styles from "../../styles.module.scss";
import type { ColumnsType } from "antd/es/table";
import { objectData, type ObjectData } from "@/mocks/object.data";
import PaginationTable from "@/components/PaginationTable";
import { formatDate, formatCurrency } from "@/utils";

export default function ObjectTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const total = objectData.length;

    const paginatedData = objectData.slice((page - 1) * pageSize, page * pageSize);

    const columns: ColumnsType<ObjectData> = [
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
            title: "Ngày",
            dataIndex: "date",
            render: (value) => formatDate(value),
            onHeaderCell: () => ({
                className: "table__header-cell",
            }),
        },
        {
            title: "Đối tượng",
            dataIndex: "objectType",
            align: "center",
            onHeaderCell: () => ({
                className: "table__header-cell table__header-cell--different",
            }),
        },
        {
            title: "Tổng tiền",
            dataIndex: "totalPrice",
            render: (value) => formatCurrency(value),
            onHeaderCell: () => ({
                className: "table__header-cell",
            }),
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

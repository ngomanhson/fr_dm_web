import { Table } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import type { ColumnsType } from "antd/es/table";
import { districtData, type District } from "@/mocks/district.data";
import PaginationTable from "@/components/PaginationTable";

export default function DistrictTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const total = districtData.length;

    const paginatedData = districtData.slice((page - 1) * pageSize, page * pageSize);

    const columns: ColumnsType<District> = [
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
                isPair={true}
            />
        </div>
    );
}

import { Table, Pagination, Select } from "antd";
import { useState } from "react";
import styles from "../../styles.module.scss";
import type { ColumnsType } from "antd/es/table";
import { objectData, type ObjectData } from "@/mocks/object.data";

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

            <div className={styles.pagination}>
                {/* left */}
                <div className={styles.pagination__left}>
                    <span className={styles.pagination__total}>Tổng: {total} bản ghi</span>

                    <Pagination
                        current={page}
                        pageSize={pageSize}
                        total={total}
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

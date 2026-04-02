import { Table } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import { wardData } from "@/mocks/ward.data";
import PaginationTable from "@/components/PaginationTable";
import { getWardColumns } from "./columns";

export default function WardTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const total = wardData.length;
    const paginatedData = wardData.slice((page - 1) * pageSize, page * pageSize);
    const columns = getWardColumns({
        page,
        pageSize,
        onEdit: (record) => console.log("Edited", record),
        onDelete: (record) => console.log("Deleted", record),
    });

    return (
        <div className={styles.wrapper}>
            <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={false}
                bordered
                rowKey="key"
                locale={{
                    emptyText: "Không có bản ghi nào thỏa mãn điều kiện tìm kiếm",
                }}
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

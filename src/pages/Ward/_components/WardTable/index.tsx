import { Table } from "antd";
import { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { wardData, type WardType } from "@/mocks/ward.data";
import PaginationTable from "@/components/PaginationTable";
import { getWardColumns } from "./columns";

export default function WardTable({ data }: { data: typeof wardData }) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const total = data.length;

    const handleEdit = (record: WardType) => {
        console.log("edit", record);
    };

    const handleDelete = (record: WardType) => {
        console.log("delete", record);
    };

    const paginatedData = useMemo(() => {
        return data.slice((page - 1) * pageSize, page * pageSize);
    }, [data, page, pageSize]);

    const columns = useMemo(() => {
        return getWardColumns({
            page,
            pageSize,
            onEdit: handleEdit,
            onDelete: handleDelete,
        });
    }, [page, pageSize]);

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
                setPageSize={(size) => {
                    setPageSize(size);
                    setPage(1);
                }}
                total={total}
                isPair={true}
            />
        </div>
    );
}

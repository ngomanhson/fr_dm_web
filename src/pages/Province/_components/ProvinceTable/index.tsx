import { Table } from "antd";
import { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import PaginationTable from "@/components/PaginationTable";
import { getProvinceColumns } from "./columns";
import type { provinceData, ProvinceType } from "@/mocks/province.data";

export default function ProvinceTable({ data }: { data: typeof provinceData }) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const total = data.length;

    const handleEdit = (record: ProvinceType) => {
        console.log("edit", record);
    };

    const handleDelete = (record: ProvinceType) => {
        console.log("delete", record);
    };

    const paginatedData = useMemo(() => {
        return data.slice((page - 1) * pageSize, page * pageSize);
    }, [data, page, pageSize]);

    const columns = useMemo(() => {
        return getProvinceColumns({
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
                setPageSize={setPageSize}
                total={total}
            />
        </div>
    );
}

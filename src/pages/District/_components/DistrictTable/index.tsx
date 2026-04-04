import { Table } from "antd";
import { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { districtData } from "@/mocks/district.data";
import PaginationTable from "@/components/PaginationTable";
import { getDistrictColumns } from "./columns";

export default function DistrictTable({ data }: { data: typeof districtData }) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const total = data.length;
    const paginatedData = useMemo(() => {
        return data.slice((page - 1) * pageSize, page * pageSize);
    }, [data, page, pageSize]);

    const columns = useMemo(() => {
        return getDistrictColumns(page, pageSize);
    }, [page, pageSize]);

    return (
        <div className={styles.wrapper}>
            <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={false}
                bordered
                rowKey="id"
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

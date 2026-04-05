import type { ClinicService } from "@/pages/ClinicService/_types/clinic.type";
import { Table } from "antd";
import { useCallback, useMemo, useState } from "react";
import { getClinicServiceColumns } from "./columns";
import PaginationTable from "@/components/PaginationTable";

interface Props {
    data: ClinicService[];
    onEdit: (record: ClinicService) => void;
}

const ServiceTable = ({ data, onEdit }: Props) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const total = data.length;

    const handleDelete = useCallback((record: ClinicService) => {
        console.log("delete", record);
    }, []);

    const columns = useMemo(() => {
        return getClinicServiceColumns({
            page,
            pageSize,
            onEdit: onEdit,
            onDelete: handleDelete,
        });
    }, [page, pageSize, onEdit, handleDelete]);

    const paginatedData = useMemo(() => {
        return data.slice((page - 1) * pageSize, page * pageSize);
    }, [data, page, pageSize]);

    return (
        <>
            <Table
                columns={columns}
                dataSource={paginatedData}
                bordered
                rowKey="id"
                scroll={{ x: "max-content", y: 500 }}
                pagination={false}
                locale={{ emptyText: "Không có bản ghi nào thỏa mãn điều kiện tìm kiếm" }}
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
        </>
    );
};

export default ServiceTable;

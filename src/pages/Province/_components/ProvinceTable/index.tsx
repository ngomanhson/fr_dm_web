import { App, Table } from "antd";
import { useMemo, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import PaginationTable from "@/components/PaginationTable";
import { getProvinceColumns } from "./columns";
import type { provinceData, ProvinceType } from "@/mocks/province.data";
import FormModal from "@/components/FormModal";
import InputItem from "@/components/InputItem";

export default function ProvinceTable({ data }: { data: typeof provinceData }) {
    const { message } = App.useApp();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const [open, setOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<ProvinceType | null>(null);

    const total = data.length;

    const handleEdit = useCallback((record: ProvinceType) => {
        setEditingRecord(record);
        setOpen(true);
    }, []);

    const handleDelete = useCallback((record: ProvinceType) => {
        console.log("delete", record);
    }, []);

    const handleSubmit = useCallback(
        (values: ProvinceType) => {
            if (editingRecord) {
                console.log("update", {
                    ...editingRecord,
                    ...values,
                });
            } else {
                console.log("create", values);
            }

            setOpen(false);
            setEditingRecord(null);
            message.success("Cập nhật thành công");
        },
        [editingRecord, message],
    );

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
    }, [page, pageSize, handleEdit, handleDelete]);

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
            />

            <FormModal<ProvinceType>
                open={open}
                title={editingRecord ? "Chỉnh sửa tỉnh/thành phố" : "Thêm tỉnh/thành phố"}
                initialValues={editingRecord}
                onCancel={() => {
                    setOpen(false);
                    setEditingRecord(null);
                }}
                onSubmit={handleSubmit}
            >
                <InputItem name="code" label="Mã tỉnh/TP" />
                <InputItem name="name" label="Tên tỉnh/TP" />
            </FormModal>
        </div>
    );
}

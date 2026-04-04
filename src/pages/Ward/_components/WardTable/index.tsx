import { App, Table } from "antd";
import { useMemo, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import { wardData } from "@/mocks/ward.data";
import PaginationTable from "@/components/PaginationTable";
import { getWardColumns } from "./columns";
import FormModal from "@/components/FormModal";
import InputItem from "@/components/InputItem";
import type { WardType } from "@/types/ward.type";

export default function WardTable({ data }: { data: typeof wardData }) {
    const { message } = App.useApp();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);

    const [open, setOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<WardType | null>(null);

    const total = data.length;

    const handleEdit = useCallback((record: WardType) => {
        setEditingRecord(record);
        setOpen(true);
    }, []);

    const handleDelete = useCallback((record: WardType) => {
        console.log("delete", record);
    }, []);

    const handleSubmit = useCallback(
        (values: WardType) => {
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
        return getWardColumns({
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
                rowKey="id"
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

            <FormModal<WardType>
                open={open}
                title={editingRecord ? "Chỉnh sửa xã/phường" : "Thêm xã/phường"}
                initialValues={editingRecord}
                onCancel={() => {
                    setOpen(false);
                    setEditingRecord(null);
                }}
                onSubmit={handleSubmit}
            >
                <InputItem name="district" label="Quận/Huyện" />
                <InputItem name="ward" label="Phường/Xã" />
                <InputItem name="code" label="Mã" />
            </FormModal>
        </div>
    );
}

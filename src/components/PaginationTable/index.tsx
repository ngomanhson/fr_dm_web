import { Input, Pagination, Select } from "antd";
import styles from "./styles.module.scss";

interface PaginationTableProps {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (size: number) => void;
    total: number;
    isPair?: boolean;
}

function PaginationTable({
    page,
    setPage,
    pageSize,
    setPageSize,
    total,
    isPair,
}: PaginationTableProps) {
    return (
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

                {isPair && (
                    <>
                        <span className={styles.pagination__label}>Đến trang</span>

                        <Input
                            value={page}
                            className={styles.pagination__input}
                            onChange={(e) => {
                                const val = Number(e.target.value);
                                if (!isNaN(val)) setPage(val);
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default PaginationTable;

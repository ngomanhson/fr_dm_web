import { Table, Pagination, Input, Select } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import type { ColumnsType } from "antd/es/table";
import { districtData, type District } from "@/mocks/district.data";

export default function DistrictTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const total = districtData.length;

  const paginatedData = districtData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const columns: ColumnsType<District> = [
    {
      title: "STT",
      render: (_, __, index) =>
        (page - 1) * pageSize + index + 1,
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

      <div className={styles.pagination}>
        {/* left */}
        <div className={styles.pagination__left}>
          <span className={styles.pagination__total}>
            Tổng: {total} bản ghi
          </span>

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

          <span className={styles.pagination__label}>
            Đến trang
          </span>

          <Input
            value={page}
            className={styles.pagination__input}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (!isNaN(val)) setPage(val);
            }}
          />
        </div>
      </div>
    </div>
  );
}
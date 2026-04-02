import { wardData } from "@/mocks/ward.data";
import WardFilter from "./_components/WardFilter";
import WardTable from "./_components/WardTable";
import { useState } from "react";
import { App } from "antd";

export default function WardPage() {
    const { message } = App.useApp();
    const [data, setData] = useState(wardData);
    const [filtered, setFiltered] = useState(wardData);

    const handleSearch = (values: any) => {
        const result = data.filter((item) => {
            return (
                (!values.ward || item.ward === values.ward) &&
                (!values.code || String(item.code).includes(values.code))
            );
        });

        if (result.length === 0) {
            message.warning("Không có bản ghi nào thỏa mãn điều kiện tìm kiếm");
        }

        setFiltered(result);
    };

    const handleImport = (newData: any[]) => {
        const merged = [...data, ...newData];
        setData(merged);
        setFiltered(merged);
    };
    return (
        <>
            <WardFilter onSearch={handleSearch} onImport={handleImport} />
            <WardTable data={filtered} />
        </>
    );
}

import { useState } from "react";
import { App } from "antd";
import { provinceData } from "@/mocks/province.data";
import ProvinceTable from "./_components/ProvinceTable";
import ProvinceFilter from "./_components/ProvinceFilter";

export default function ProvincePage() {
    const { message } = App.useApp();
    const [data, setData] = useState(provinceData);
    const [filtered, setFiltered] = useState(provinceData);

    const handleSearch = (values: any) => {
        const result = data.filter((item) => {
            return (
                (!values.name || item.name.toLowerCase().includes(values.name.toLowerCase())) &&
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
            <ProvinceFilter onSearch={handleSearch} onImport={handleImport} />
            <ProvinceTable data={filtered} />
        </>
    );
}

import { useState } from "react";
import DistrictFilter from "@/pages/District/_components/DistrictFilter";
import DistrictTable from "@/pages/District/_components/DistrictTable";
import { districtData } from "@/mocks/district.data";
import { App } from "antd";

export default function DistrictPage() {
    const { message } = App.useApp();
    const [data, setData] = useState(districtData);
    const [filtered, setFiltered] = useState(districtData);

    const handleSearch = (values: any) => {
        const result = data.filter((item) => {
            return (
                (!values.province || item.province === values.province) &&
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
            <DistrictFilter onSearch={handleSearch} onImport={handleImport} />
            <DistrictTable data={filtered} />
        </>
    );
}

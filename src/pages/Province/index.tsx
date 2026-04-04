import { useMemo, useState } from "react";
import { App } from "antd";
import { provinceData } from "@/mocks/province.data";
import ProvinceTable from "./_components/ProvinceTable";
import ProvinceFilter from "./_components/ProvinceFilter";

export default function ProvincePage() {
    const { message } = App.useApp();
    const [data, setData] = useState(provinceData);
    const [filtered, setFiltered] = useState(provinceData);

    const handleSearch = (values: any) => {
        const { province, code } = values;

        const hasFilter = province || code;

        const result = hasFilter
            ? data.filter((item) => {
                  return (
                      (!province || item.name === province) &&
                      (!code || String(item.code).includes(code))
                  );
              })
            : data;

        if (hasFilter && result.length === 0) {
            message.warning("Không có bản ghi nào thỏa mãn điều kiện tìm kiếm");
        }

        setFiltered(result);
    };

    const provinceOptions = useMemo(() => {
        return [...new Set(data?.map((d) => d.name))].map((p) => ({
            label: p,
            value: p,
        }));
    }, [data]);

    const handleImport = (newData: any[]) => {
        const merged = [...data, ...newData];
        setData(merged);
        setFiltered(merged);
    };

    return (
        <>
            <ProvinceFilter
                onSearch={handleSearch}
                onImport={handleImport}
                provinceOptions={provinceOptions}
            />
            <ProvinceTable data={filtered} />
        </>
    );
}

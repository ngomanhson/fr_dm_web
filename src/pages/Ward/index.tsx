import { wardData } from "@/mocks/ward.data";
import WardFilter from "./_components/WardFilter";
import WardTable from "./_components/WardTable";
import { useMemo, useState } from "react";
import { App } from "antd";

export default function WardPage() {
    const { message } = App.useApp();
    const [data, setData] = useState(wardData);
    const [filtered, setFiltered] = useState(wardData);

    const handleSearch = (values: any) => {
        const { district, code } = values;

        const hasFilter = district || code;

        const result = hasFilter
            ? data.filter((item) => {
                  return (
                      (!district || item.district === district) &&
                      (!code || String(item.code).includes(code))
                  );
              })
            : data;

        if (hasFilter && result.length === 0) {
            message.warning("Không có bản ghi nào thỏa mãn điều kiện tìm kiếm");
        }

        setFiltered(result);
    };

    const districtOptions = useMemo(() => {
        return [...new Set(data?.map((d) => d.district))].map((p) => ({
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
            <WardFilter
                onSearch={handleSearch}
                onImport={handleImport}
                districtOptions={districtOptions}
            />
            <WardTable data={filtered} />
        </>
    );
}

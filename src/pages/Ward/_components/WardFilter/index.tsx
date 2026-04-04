import FilterBar from "@/components/FilterBar";

export default function WardFilter({ onSearch, onImport, districtOptions }: any) {
    return (
        <FilterBar
            onSearch={onSearch}
            onImport={onImport}
            importTitle="Import xã/phường"
            fields={[
                {
                    name: "district",
                    label: "Quận / Huyện",
                    type: "select",
                    options: districtOptions,
                    showSearch: true,
                    optionFilterProp: "label",
                    placeholder: "Chọn quận / huyện",
                },
                {
                    name: "code",
                    label: "Mã xã/phường",
                    placeholder: "Nhập mã",
                    maxLength: 25,
                },
            ]}
        />
    );
}

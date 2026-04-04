import FilterBar from "@/components/FilterBar";

export default function ProvinceFilter({ onSearch, onImport, provinceOptions }: any) {
    return (
        <FilterBar
            onSearch={onSearch}
            onImport={onImport}
            importTitle="Import tỉnh/TP"
            fields={[
                {
                    name: "province",
                    label: "Tên tỉnh/TP",
                    type: "select",
                    options: provinceOptions,
                    showSearch: true,
                    optionFilterProp: "label",
                    placeholder: "Chọn tỉnh",
                },
                {
                    name: "code",
                    label: "Mã tỉnh/TP",
                    placeholder: "Nhập mã",
                    maxLength: 250,
                },
            ]}
        />
    );
}

import FilterBar from "@/components/FilterBar";

export default function DistrictFilter({ onSearch, onImport, provinceOptions }: any) {
    return (
        <FilterBar
            onSearch={onSearch}
            onImport={onImport}
            importTitle="Import huyện/thị xã"
            fields={[
                {
                    name: "province",
                    label: "Tỉnh/TP",
                    type: "select",
                    options: provinceOptions,
                    showSearch: true,
                    optionFilterProp: "label",
                    placeholder: "Chọn tỉnh",
                },
                {
                    name: "name",
                    label: "Tên huyện/thị xã",
                    placeholder: "Nhập",
                    maxLength: 250,
                },
            ]}
        />
    );
}

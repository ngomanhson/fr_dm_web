import { Form, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import UploadButton from "@/components/UploadButton";
import InputItem from "@/components/InputItem";
import styles from "./styles.module.scss";

interface Field {
    name: string;
    label: string;
    type?: "input" | "select";
    options?: { label: string; value: any }[];
    placeholder?: string;
    maxLength?: number;
    showSearch?: boolean;
    optionFilterProp?: string;
}

interface Props {
    fields: Field[];
    onSearch: (values: any) => void;
    onImport?: (data: any) => void;
    importTitle?: string;
}

export default function FilterBar({
    fields,
    onSearch,
    onImport,
    importTitle = "Import file",
}: Props) {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" onFinish={onSearch} className={styles.filter}>
            <div className={styles.filter__inputs}>
                {fields.map((field) => (
                    <div key={field.name} className={styles.filter__field}>
                        <InputItem
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            options={field.options}
                            placeholder={field.placeholder}
                            maxLength={field.maxLength}
                            showSearch={field.showSearch}
                            optionFilterProp={field.optionFilterProp}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.filter__actions}>
                {onImport && <UploadButton onImport={onImport} title={importTitle} />}

                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

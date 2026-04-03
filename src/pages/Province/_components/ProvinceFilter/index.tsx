import { Form, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import UploadButton from "@/components/UploadButton";
import styles from "./styles.module.scss";
import { provinceData } from "@/mocks/province.data";
import InputItem from "@/components/InputItem";

export default function ProvinceFilter({ onSearch, onImport }: any) {
    const [form] = Form.useForm();

    const provinceOptions = [...new Set(provinceData.map((p) => p.name))].map((name) => ({
        label: name,
        value: name,
    }));

    return (
        <Form form={form} layout="vertical" onFinish={onSearch} className={styles.filter}>
            <div className={styles.filter__inputs}>
                <div className={styles.filter__field}>
                    <InputItem
                        name="province"
                        label="Tên tỉnh/TP"
                        type="select"
                        options={provinceOptions}
                        showSearch
                        optionFilterProp="label"
                        placeholder="Chọn tỉnh"
                        required={false}
                    />
                </div>

                <div className={styles.filter__field}>
                    <InputItem
                        name="code"
                        label="Mã tỉnh/TP"
                        maxLength={250}
                        placeholder="Nhập mã"
                        required={false}
                    />
                </div>
            </div>

            <div className={styles.filter__actions}>
                <UploadButton onImport={onImport} title="Import tỉnh/TP" />

                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

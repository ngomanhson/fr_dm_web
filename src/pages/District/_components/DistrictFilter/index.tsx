import { Form, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import UploadButton from "@/components/UploadButton";
import styles from "./styles.module.scss";

export default function DistrictFilter({ onSearch, onImport }: any) {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" onFinish={onSearch} className={styles.filter}>
            <div className={styles.filter__inputs}>
                <Form.Item label="Tỉnh/TP" name="province" className={styles.filter__field}>
                    <Select
                        showSearch
                        optionFilterProp="label"
                        placeholder="Chọn tỉnh"
                        options={[{ label: "Hà Nội", value: "HN" }]}
                    />
                </Form.Item>

                <Form.Item label="Tên huyện/thị xã" name="name" className={styles.filter__field}>
                    <Input maxLength={250} />
                </Form.Item>
            </div>

            <div className={styles.filter__actions}>
                <UploadButton onImport={onImport} title="Import huyện/thị xã" />
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

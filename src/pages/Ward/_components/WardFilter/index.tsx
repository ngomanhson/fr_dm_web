import { Select, Input, Form, Button } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import UploadButton from "@/components/UploadButton";

export default function WardFilter({ onSearch, onImport }: any) {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical" onFinish={onSearch} className={styles.filter}>
            <div className={styles.filter__inputs}>
                <Form.Item label="Quận / Huyện" className={styles.filter__field}>
                    <Select
                        placeholder="Chọn"
                        showSearch
                        optionFilterProp="label"
                        options={[{ label: "Hà Nội", value: 1 }]}
                    />
                </Form.Item>

                <Form.Item label="Mã xã/phường" name="code" className={styles.filter__field}>
                    <Input maxLength={25} placeholder="Nhập" />
                </Form.Item>
            </div>

            <div className={styles.filter__actions}>
                <UploadButton onImport={onImport} title="Import xã/phường" />
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

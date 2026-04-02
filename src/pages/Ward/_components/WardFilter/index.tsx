import { Select, Input, Form, Button } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import UploadFile from "@/components/UploadButton";

export default function WardFilter() {
    return (
        <Form layout="vertical" className={styles.filter}>
            <Form.Item label="Quận / Huyện" className={styles.filter__field}>
                <Select placeholder="Chọn" options={[{ label: "Hà Nội", value: 1 }]} />
            </Form.Item>

            <Form.Item label="Mã xã/phường" className={styles.filter__field}>
                <Input maxLength={25} placeholder="Nhập" />
            </Form.Item>

            <div className={styles.filter__actions}>
                <UploadFile onChange={(file) => console.log(file)} />
                <Button type="primary" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

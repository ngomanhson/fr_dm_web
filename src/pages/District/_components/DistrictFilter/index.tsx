import { Select, Input, Form, Button, Upload } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";

export default function DistrictFilter() {
  return (
    <Form layout="vertical" className={styles.filter}>
      <Form.Item label="Tên tỉnh/TP" className={styles.filter__field}>
        <Select
          placeholder="Tên tỉnh/TP"
          options={[{ label: "Hà Nội", value: 1 }]}
        />
      </Form.Item>

      <Form.Item label="Tên huyện/thị xã" className={styles.filter__field}>
        <Input placeholder="Tên huyện/thị xã" />
      </Form.Item>

      {/* Actions */}
      <div className={styles.filter__actions}>
        <Upload
          beforeUpload={() => false} // 🔥 không auto upload
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Import file</Button>
        </Upload>
        <Button type="primary" icon={<SearchOutlined />}>
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
}
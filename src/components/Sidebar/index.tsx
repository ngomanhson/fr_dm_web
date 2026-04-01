import { Layout, Menu, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider width={240} className={styles.sider}>
      <Input
        placeholder="Tìm kiếm"
        prefix={<SearchOutlined />}
        className={styles.search}
      />

      <Menu
        mode="inline"
        defaultSelectedKeys={["district"]}
        items={[
          { key: "1", label: "Loại đặt hẹn" },
          { key: "2", label: "Loại chính sách" },
          { key: "district", label: "Huyện/thị xã" },
          { key: "ward", label: "Xã/phường" },
          { key: "province", label: "Tỉnh/thành phố" },
        ]}
      />
    </Sider>
  );
}
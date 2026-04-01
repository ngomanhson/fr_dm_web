import { Layout } from "antd";
import styles from "./styles.module.scss";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className={styles.header}>
      <div>Trang chủ / Huyện/thị xã</div>
      <div>Vietsoft 🇻🇳</div>
    </Header>
  );
}
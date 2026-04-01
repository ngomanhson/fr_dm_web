import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import React from "react";

const { Header } = Layout;

interface Props {
    onMenuClick: () => void;
}

function AppHeader({ onMenuClick }: Props) {
    return (
        <Header className={styles.header}>
            <div className={styles.left}>
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={onMenuClick}
                    className={styles.mobileBtn}
                />
                <span className={styles.breadcrumb}>Trang chủ / Huyện/thị xã</span>
            </div>

            <div className={styles.right}>Vinorsoft 🇻🇳</div>
        </Header>
    );
}

export default React.memo(AppHeader);

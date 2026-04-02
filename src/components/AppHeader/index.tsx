import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import config from "@/configs";
import Logo from "@/assets/images/logo.png";

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
                <Link to={config.routes.dashboard} className={styles.logo}>
                    <img src={Logo} alt="Vinorsoft" className={styles.logo__img} />
                </Link>
                <span className={styles.breadcrumb}>Trang chủ / Huyện/thị xã</span>
            </div>

            <div className={styles.right}>Vinorsoft 🇻🇳</div>
        </Header>
    );
}

export default React.memo(AppHeader);

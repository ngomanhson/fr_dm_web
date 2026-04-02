import React, { useMemo } from "react";
import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import config from "@/configs";
import Logo from "@/assets/images/logo.png";
import styles from "./styles.module.scss";

const { Header } = Layout;
interface AppHeaderProps {
    onMenuClick: () => void;
    title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onMenuClick, title }) => {
    const isHome = useMemo(() => title === "Trang chủ", [title]);

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
                    <img src={Logo} alt="Logo" className={styles.logo__img} />
                </Link>

                <nav className={styles.breadcrumb}>
                    <Link to={config.routes.dashboard} className={styles.breadcrumb__title}>
                        Trang chủ{" "}
                    </Link>
                    {!isHome && <span>/ {title}</span>}
                </nav>
            </div>

            <div className={styles.right}>
                <span className={styles.brandName}>Vinorsoft 🇻🇳</span>
            </div>
        </Header>
    );
};

export default React.memo(AppHeader);

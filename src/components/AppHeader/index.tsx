import React, { useEffect, useState, useCallback } from "react";
import { Button, Layout } from "antd";
import { ExpandAltOutlined, CompressOutlined, MenuOutlined } from "@ant-design/icons";
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
    const isHome = title === "Trang chủ";

    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleChange);
        };
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);

    return (
        <Header className={styles.header}>
            <div className={styles.header__left}>
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
                        Trang chủ
                    </Link>

                    {!isHome && <span>/ {title}</span>}
                </nav>
            </div>

            <div className={styles.header__right}>
                <span>Vinorsoft 🇻🇳</span>

                <Button
                    type="text"
                    onClick={toggleFullscreen}
                    icon={
                        isFullscreen ? (
                            <CompressOutlined className={styles["header__right--icon"]} />
                        ) : (
                            <ExpandAltOutlined className={styles["header__right--icon"]} />
                        )
                    }
                />
            </div>
        </Header>
    );
};

export default React.memo(AppHeader);

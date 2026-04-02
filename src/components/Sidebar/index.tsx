import { useState, useMemo } from "react";
import { Layout, Menu, Input, Drawer, Button, Grid } from "antd";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

interface SidebarProps {
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
}

const menuItems = [
    { key: "/appointment-types", label: "Loại đặt hẹn" },
    { key: "/policy-types", label: "Loại chính sách" },
    { key: "/booking-methods", label: "Phương thức đặt hẹn" },
    { key: "/visit-reasons", label: "Lý do thăm khám" },
    { key: "/districts", label: "Huyện/thị xã" },
    { key: "/wards", label: "Xã/phường" },
    { key: "/provinces", label: "Tỉnh/thành phố" },
    { key: "/card-categories", label: "Danh mục thẻ" },
];

export default function Sidebar({ openMobile, setOpenMobile }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const selectedKeys = useMemo(() => {
        return [location.pathname];
    }, [location.pathname]);

    const handleMenuClick = (e: any) => {
        navigate(e.key);
    };

    const isMobile = useMemo(() => !screens.md, [screens.md]);

    const toggleCollapse = () => setCollapsed((prev) => !prev);

    // TODO: Tách menuItems ra component riêng
    const content = (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
            </div>

            <Menu
                mode="inline"
                items={menuItems}
                className={styles.menu}
                selectedKeys={selectedKeys}
                onClick={handleMenuClick}
            />

            {!isMobile && (
                <div className={styles.footer}>
                    <Button type="text" icon={<MenuFoldOutlined />} onClick={toggleCollapse} />
                </div>
            )}
        </div>
    );

    if (isMobile) {
        return (
            <Drawer
                placement="left"
                open={openMobile}
                onClose={() => setOpenMobile(false)}
                width={260}
                styles={{ body: { padding: 0 } }}
                closable={false}
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Sider width={260} collapsed={collapsed} className={styles.sidebar}>
            {content}
        </Sider>
    );
}

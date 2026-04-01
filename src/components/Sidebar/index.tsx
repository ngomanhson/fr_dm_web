import { useState, useMemo } from "react";
import { Layout, Menu, Input, Drawer, Button, Grid } from "antd";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

interface SidebarProps {
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
}

const menuItems = [
    { key: "1", label: "Loại đặt hẹn" },
    { key: "2", label: "Loại chính sách" },
    { key: "3", label: "Phương thức đặt hẹn" },
    { key: "4", label: "Lý do thăm khám" },
    { key: "5", label: "Huyện/thị xã" },
    { key: "6", label: "Xã/phường" },
    { key: "7", label: "Tỉnh/thành phố" },
    { key: "8", label: "Danh mục thẻ" },
];

export default function Sidebar({ openMobile, setOpenMobile }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();

    const isMobile = useMemo(() => !screens.md, [screens.md]);

    const toggleCollapse = () => setCollapsed((prev) => !prev);
    // TODO: Tách menuItems ra file riêng nếu có nhiều hơn 10 mục để tránh file quá dài, dễ bảo trì hơn.
    const content = (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
            </div>

            <Menu
                mode="inline"
                defaultSelectedKeys={["5"]}
                items={menuItems}
                className={styles.menu}
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

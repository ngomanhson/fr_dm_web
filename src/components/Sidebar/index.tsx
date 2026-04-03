import { useState, useMemo } from "react";
import { Layout, Menu, Drawer, Button, Grid, Form } from "antd";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import InputItem from "@/components/InputItem";
import { menuItems } from "@/mocks/sidebar.data";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

interface SidebarProps {
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
}

export default function Sidebar({ openMobile, setOpenMobile }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const screens = useBreakpoint();

    const [collapsed, setCollapsed] = useState(false);
    const [keyword, setKeyword] = useState("");

    const isMobile = !screens.md;

    const selectedKeys = useMemo(() => {
        const found = menuItems.find((item) => location.pathname.startsWith(item.key));
        return [found?.key || location.pathname];
    }, [location.pathname]);

    const handleMenuClick = (e: any) => {
        navigate(e.key);
        if (isMobile) setOpenMobile(false);
    };

    const filteredMenu = useMemo(() => {
        if (!keyword) return menuItems;

        const lower = keyword.toLowerCase();
        return menuItems.filter((item) => item.label.toLowerCase().includes(lower));
    }, [keyword]);

    // TODO: Tách menuItems ra component riêng
    const content = (
        <div className={styles.wrapper}>
            <div className={styles.searchContainer}>
                <Form>
                    <InputItem
                        placeholder="Tìm kiếm"
                        prefix={<SearchOutlined />}
                        onChange={(e: any) => setKeyword(e.target.value)}
                    />
                </Form>
            </div>

            <Menu
                mode="inline"
                items={filteredMenu}
                className={styles.menu}
                selectedKeys={selectedKeys}
                onClick={handleMenuClick}
            />

            {!isMobile && (
                <div className={styles.footer}>
                    <Button
                        type="text"
                        icon={<MenuFoldOutlined />}
                        onClick={() => setCollapsed((prev) => !prev)}
                    />
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

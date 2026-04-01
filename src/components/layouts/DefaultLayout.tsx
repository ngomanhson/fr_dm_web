import { Layout } from "antd";
import { useState, useCallback } from "react";
import AppHeader from "../AppHeader";
import Sidebar from "../Sidebar";

const { Content } = Layout;

const contentStyle = {
    padding: 24,
    background: "#f5f5f5",
    minHeight: "calc(100vh - 64px)",
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const [openMobile, setOpenMobile] = useState(false);
    const openMenu = useCallback(() => setOpenMobile(true), []);
    const closeMenu = useCallback(() => setOpenMobile(false), []);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AppHeader onMenuClick={openMenu} />

            <Layout style={{ marginTop: 64 }}>
                <Sidebar openMobile={openMobile} setOpenMobile={closeMenu} />

                <Layout>
                    <Content style={contentStyle}>{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

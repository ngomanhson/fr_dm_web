import { Layout } from "antd";
import AppHeader from "../AppHeader";
import Sidebar from "../Sidebar";

const { Content } = Layout;

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        <Sidebar />
        <Content style={{ padding: 16, background: "#f5f5f5" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
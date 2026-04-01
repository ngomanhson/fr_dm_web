import { ConfigProvider } from "antd";
import AppRoutes from "@/AppRoutes";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#1677ff",
                    borderRadius: 8,
                },
            }}
        >
            <AppRoutes />
        </ConfigProvider>
    );
}

export default App;

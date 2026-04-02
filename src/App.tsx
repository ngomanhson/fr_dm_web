// import { ConfigProvider } from "antd";
import AppRoutes from "@/AppRoutes";
import { App as AntApp } from "antd";

function App() {
    return (
        // <ConfigProvider
        //     theme={{
        //         token: {
        //             colorPrimary: "#1677ff",
        //             borderRadius: 8,
        //         },
        //     }}
        // >
        <AntApp>
            <AppRoutes />
        </AntApp>
        // </ConfigProvider>
    );
}

export default App;

import { ConfigProvider } from "antd";
import styles from "./App.module.scss";

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
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
    </ConfigProvider>
  );
}

export default App

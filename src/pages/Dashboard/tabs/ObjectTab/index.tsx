import { FileExcelOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ObjectTable from "./ObjectTable";
import styles from "../../styles.module.scss";

export default function ObjectTab() {
    return (
        <div className={styles.object}>
            <Button
                icon={<FileExcelOutlined />}
                type="primary"
                className={styles["object__export-btn"]}
            >
                Xuất Excel
            </Button>

            <div>
                <ObjectTable />
            </div>
        </div>
    );
}

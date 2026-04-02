import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import styles from "./styles.module.scss";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.notFound}>
            <Result
                status="404"
                title="404"
                subTitle="Oops! Không tìm thấy trang. Trang bạn đang tìm có thể đã bị xoá, đổi tên hoặc không tồn tại."
                extra={[
                    <Button type="primary" size="large" onClick={() => navigate("/")}>
                        Về trang chủ
                    </Button>,
                    <Button size="large" onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>,
                ]}
            />
        </div>
    );
}

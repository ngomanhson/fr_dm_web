import { Form, Button } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import UploadButton from "@/components/UploadButton";
import { districtMap } from "@/mocks/ward.data";
import InputItem from "@/components/InputItem";

export default function WardFilter({ onSearch, onImport }: any) {
    const [form] = Form.useForm();

    const districtOptions = Object.keys(districtMap).map((district) => ({
        label: district,
        value: district,
    }));

    return (
        <Form form={form} layout="vertical" onFinish={onSearch} className={styles.filter}>
            <div className={styles.filter__inputs}>
                <div className={styles.filter__field}>
                    <InputItem
                        name="district"
                        label="Quận / Huyện"
                        type="select"
                        options={districtOptions}
                        showSearch
                        optionFilterProp="label"
                        placeholder="Chọn quận / huyện"
                        required={false}
                    />
                </div>

                <div className={styles.filter__field}>
                    <InputItem
                        name="code"
                        label="Mã xã/phường"
                        maxLength={25}
                        placeholder="Nhập mã"
                        required={false}
                    />
                </div>
            </div>

            <div className={styles.filter__actions}>
                <UploadButton onImport={onImport} title="Import xã/phường" />

                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    );
}

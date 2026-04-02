import { UploadOutlined, DeleteOutlined, InboxOutlined } from "@ant-design/icons";
import { Modal, Button, Upload, Select, Space, Typography, App } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import styles from "./styles.module.scss";

const { Text } = Typography;

const ALLOWED_EXT = ["xls", "xlsx", "csv"];
const MAX_SIZE_MB = 10;

export default function UploadButton({ onImport, title }: any) {
    const { message } = App.useApp();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [province, setProvince] = useState<string | undefined>();

    const resetState = () => {
        setFile(null);
        setProvince(undefined);
    };

    const validateFile = (file: File) => {
        const ext = file.name.split(".").pop()?.toLowerCase();

        if (!ext || !ALLOWED_EXT.includes(ext)) {
            message.error("Chỉ chấp nhận file .xls, .xlsx, .csv");
            return false;
        }

        const sizeMB = file.size / 1024 / 1024;
        if (sizeMB > MAX_SIZE_MB) {
            message.error(`File vượt quá ${MAX_SIZE_MB}MB`);
            return false;
        }

        if (file.size === 0) {
            message.error("File trống");
            return false;
        }

        return true;
    };

    const handleUpload = () => {
        if (!province) return message.error("Vui lòng chọn Tỉnh/TP");
        if (!file) return message.error("Vui lòng chọn file");

        const fakeData = [
            {
                key: Date.now(),
                code: 1,
                name: "Ba Đình",
                province,
            },
        ];

        onImport(fakeData);

        message.success("Import thành công");

        setOpen(false);
        resetState();
    };

    const handleCancel = () => {
        setOpen(false);
        resetState();
    };

    return (
        <>
            <Button
                icon={<UploadOutlined />}
                onClick={() => {
                    resetState();
                    setOpen(true);
                }}
            >
                Import file
            </Button>

            <Modal
                title={title}
                open={open}
                onOk={handleUpload}
                onCancel={handleCancel}
                okButtonProps={{
                    disabled: !file || !province,
                }}
                destroyOnHidden
            >
                <Select
                    placeholder="Chọn tỉnh/TP"
                    value={province}
                    onChange={setProvince}
                    options={[{ label: "Hà Nội", value: "HN" }]}
                    className={styles.uploadButton__select}
                    showSearch
                    optionFilterProp="label"
                />

                {!file ? (
                    <Dragger
                        beforeUpload={(f) => {
                            if (!validateFile(f)) return Upload.LIST_IGNORE;

                            setFile(f);
                            message.success(`${f.name} đã được chọn.`);
                            return false;
                        }}
                        showUploadList={true}
                        maxCount={1}
                        multiple={false}
                        className={styles.uploadButton__dragger}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined className={styles.uploadButton__dragger_icon} />
                        </p>
                        <p className="ant-upload-hint">
                            Nhấp hoặc kéo tệp vào khu vực này để tải lên
                        </p>
                    </Dragger>
                ) : (
                    <div className={styles.uploadButton__fileInfo}>
                        <Space className={styles.uploadButton__fileInfo_space}>
                            <div className={styles.uploadButton__fileInfo_details}>
                                <Text strong>{file.name}</Text>
                                <Text
                                    type="secondary"
                                    className={styles.uploadButton__fileInfo_size}
                                >
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </Text>
                            </div>

                            <Button
                                danger
                                type="text"
                                icon={<DeleteOutlined />}
                                className={styles.uploadButton__fileInfo_deleteBtn}
                                onClick={() => setFile(null)}
                            />
                        </Space>
                    </div>
                )}
            </Modal>
        </>
    );
}

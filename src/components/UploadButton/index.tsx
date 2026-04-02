import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

interface UploadFileProps {
    accept?: string;
    maxCount?: number;
    onChange?: (file: File | null) => void;
}

export default function UploadFile({
    accept = ".xls,.xlsx,.csv",
    maxCount = 1,
    onChange,
}: UploadFileProps) {
    const [fileList, setFileList] = useState<any[]>([]);

    const handleBeforeUpload = (file: File) => {
        const isValid = accept
            .split(",")
            .some((ext) => file.name.toLowerCase().endsWith(ext.trim()));

        if (!isValid) {
            message.error(`Chỉ chấp nhận file: ${accept}`);
            return Upload.LIST_IGNORE;
        }

        setFileList([file]);
        onChange?.(file);

        return false;
    };

    const handleRemove = () => {
        setFileList([]);
        onChange?.(null);
    };

    return (
        <Upload
            accept={accept}
            beforeUpload={handleBeforeUpload}
            fileList={fileList}
            onRemove={handleRemove}
            maxCount={maxCount}
        >
            <Button icon={<UploadOutlined />}>Import file</Button>
        </Upload>
    );
}

import { Modal, Form } from "antd";
import React, { useEffect } from "react";

interface FormModalProps<T extends object> {
    open: boolean;
    title: string;
    initialValues?: T | null;
    onCancel: () => void;
    onSubmit: (values: T) => void;
    children: React.ReactNode;
}

export default function FormModal<T extends object>({
    open,
    title,
    initialValues,
    onCancel,
    onSubmit,
    children,
}: FormModalProps<T>) {
    const [form] = Form.useForm<T>();

    useEffect(() => {
        if (!open) return;

        form.resetFields();

        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [open, initialValues, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values as T);

            form.resetFields();
        } catch (err) {
            console.log("validate failed", err);
        }
    };

    return (
        <Modal
            title={title}
            open={open}
            onCancel={onCancel}
            onOk={handleOk}
            destroyOnHidden
            forceRender
        >
            <Form form={form} layout="vertical">
                {children}
            </Form>
        </Modal>
    );
}

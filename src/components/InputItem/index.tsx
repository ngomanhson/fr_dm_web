import { Form, Input, Select, Checkbox, Radio, DatePicker } from "antd";
import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type InputType = "text" | "select" | "number" | "checkbox" | "radio" | "datepicker" | "password";

interface Option {
    label: string;
    value: string | number;
}

interface Props {
    name?: string;
    label?: string;
    type?: InputType;
    placeholder?: string;
    options?: Option[];
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    required?: boolean;
    rules?: any[];
    disabled?: boolean;
    showSearch?: boolean;
    optionFilterProp?: string;
    allowClear?: boolean;
    [key: string]: any;
}

export default function InputItem({
    name,
    label,
    type = "text",
    placeholder,
    options = [],
    prefixIcon,
    suffixIcon,
    required = false,
    rules,
    disabled = false,
    showSearch,
    optionFilterProp,
    allowClear = true,
    ...rest
}: Props) {
    const finalRules =
        rules ?? (required ? [{ required: true, message: `${label} không được để trống` }] : []);

    const valuePropName = type === "checkbox" ? "value" : undefined;

    const renderField = () => {
        switch (type) {
            case "text":
                return (
                    <Input
                        placeholder={placeholder || (label ? `Nhập ${label}` : "")}
                        prefix={prefixIcon}
                        suffix={suffixIcon}
                        disabled={disabled}
                        {...rest}
                    />
                );

            case "number":
                return (
                    <Input
                        type="number"
                        placeholder={placeholder || (label ? `Nhập ${label}` : "")}
                        disabled={disabled}
                        {...rest}
                    />
                );

            case "select":
                return (
                    <Select
                        placeholder={placeholder || (label ? `Chọn ${label}` : "")}
                        options={options}
                        allowClear={allowClear}
                        showSearch={showSearch}
                        optionFilterProp={optionFilterProp}
                        disabled={disabled}
                        {...rest}
                    />
                );

            case "checkbox":
                return <Checkbox.Group options={options} disabled={disabled} {...rest} />;

            case "radio":
                return (
                    <Radio.Group disabled={disabled} {...rest}>
                        {options.map((opt) => (
                            <Radio key={opt.value} value={opt.value}>
                                {opt.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                );

            case "datepicker":
                return (
                    <DatePicker
                        placeholder={placeholder || (label ? `Chọn ${label}` : "")}
                        disabled={disabled}
                        format="DD/MM/YYYY"
                        style={{ width: "100%" }}
                        {...rest}
                    />
                );

            case "password":
                return (
                    <Input.Password
                        placeholder={placeholder || (label ? `Nhập ${label}` : "")}
                        prefix={prefixIcon}
                        disabled={disabled}
                        {...rest}
                    />
                );

            default:
                return <Input disabled={disabled} {...rest} />;
        }
    };

    if (!name) {
        return renderField();
    }

    return (
        <Form.Item
            name={name}
            rules={finalRules}
            valuePropName={valuePropName}
            className={styles["no-margin"]}
        >
            {renderField()}
        </Form.Item>
    );
}

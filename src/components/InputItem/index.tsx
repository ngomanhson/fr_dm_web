import { Form, Input, Select, Checkbox, Radio, DatePicker } from "antd";
import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type InputType = "input" | "select" | "number" | "checkbox" | "radio" | "datepicker";

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
    disabled?: boolean;
    [key: string]: any;
}

export default function InputItem({
    name,
    label,
    type = "input",
    placeholder,
    options = [],
    prefixIcon,
    suffixIcon,
    required = true,
    disabled = false,
    ...rest
}: Props) {
    const rules = required ? [{ required: true, message: `${label} không được để trống` }] : [];

    const renderField = () => {
        switch (type) {
            case "input":
                return (
                    <Input
                        placeholder={placeholder || `Nhập ${label}`}
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
                        placeholder={placeholder || `Nhập ${label}`}
                        disabled={disabled}
                        {...rest}
                    />
                );

            case "select":
                return (
                    <Select
                        placeholder={placeholder || `Chọn ${label}`}
                        options={options}
                        allowClear
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
                        placeholder={placeholder}
                        disabled={disabled}
                        format="DD/MM/YYYY"
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
            label={label}
            rules={rules}
            valuePropName={type === "checkbox" ? "value" : "value"}
            className={styles["no-margin"]}
        >
            {renderField()}
        </Form.Item>
    );
}

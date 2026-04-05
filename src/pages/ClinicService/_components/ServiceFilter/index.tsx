import React from "react";
import { Button, Col, Row, Space, Form } from "antd";
import { SearchOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { retrieveSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import InputItem from "@/components/InputItem";
import { fieldLayout, searchSchema, uiSchema } from "./searchSchema";
import type { ClinicServiceFilter } from "../../_types/clinic.type";
import styles from "./styles.module.scss";

type Props = {
    onSearch: (values: ClinicServiceFilter) => void;
    onCreate: () => void;
};

const resolvedSchema = retrieveSchema(validator, searchSchema, searchSchema);
const schemaProperties = resolvedSchema.properties as Record<string, any>;

const buildFieldConfig = (key: string, schemaProp: any) => ({
    name: key,
    label: schemaProp.title ?? key,
    placeholder: uiSchema[key]?.["ui:placeholder"] ?? "",
    type: schemaProp.oneOf ? ("select" as const) : ("text" as const),
    options: schemaProp.oneOf?.map((o: any) => ({ label: o.title, value: o.const })),
});

const fieldConfigs = Object.entries(schemaProperties).map(([key, prop]) =>
    buildFieldConfig(key, prop),
);

const ServiceFilter: React.FC<Props> = ({ onSearch, onCreate }) => {
    const [form] = Form.useForm();

    const firstRowFields = fieldLayout.firstRow
        .map((fieldName) => fieldConfigs.find((f) => f.name === fieldName))
        .filter(Boolean) as ReturnType<typeof buildFieldConfig>[];
    const secondRowFields = fieldLayout.secondRow
        .map((fieldName) => fieldConfigs.find((f) => f.name === fieldName))
        .filter(Boolean) as ReturnType<typeof buildFieldConfig>[];

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onSearch}
            className={styles["service-filter"]}
        >
            <Row gutter={24}>
                {firstRowFields.map((field) => (
                    <Col span={8} key={field.name}>
                        <InputItem {...field} allowClear />
                    </Col>
                ))}
            </Row>

            {secondRowFields.length > 0 && (
                <Row gutter={24} className={styles["service-filter__row--second"]}>
                    {secondRowFields.map((field) => (
                        <Col span={8} key={field.name}>
                            <InputItem {...field} allowClear />
                        </Col>
                    ))}
                </Row>
            )}

            <Row className={styles["service-filter__actions"]}>
                <Col span={24}>
                    <div className={styles["service-filter__actions-wrapper"]}>
                        <Space>
                            <Button htmlType="submit" icon={<SearchOutlined />} type="primary">
                                Tìm kiếm
                            </Button>

                            <Button
                                icon={<ReloadOutlined />}
                                onClick={() => {
                                    form.resetFields();
                                    onSearch({});
                                }}
                            >
                                Reset
                            </Button>

                            <Button icon={<PlusOutlined />} type="primary" onClick={onCreate}>
                                Thêm mới
                            </Button>
                        </Space>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};

export default ServiceFilter;

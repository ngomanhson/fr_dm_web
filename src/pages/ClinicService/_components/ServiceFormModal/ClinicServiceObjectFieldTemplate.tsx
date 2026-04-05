import React from "react";
import { Row, Col } from "antd";
import type { ObjectFieldTemplateProps } from "@rjsf/utils";
import styles from "./styles.module.scss";

const FIELD_LAYOUT: Record<
    string,
    {
        span: number;
        rowBreakBefore?: boolean;
        checkboxRow?: boolean;
        sectionLabel?: string;
    }
> = {
    serviceName: { span: 6, rowBreakBefore: true },
    id: { span: 6 },
    serviceType: { span: 6 },
    serviceGroup: { span: 6 },

    insuranceCode: { span: 6, rowBreakBefore: true },
    insuranceName: { span: 6 },
    serviceGroupDetail: { span: 6 },
    testTubeName: { span: 6 },

    unit: { span: 6, rowBreakBefore: true },
    surgeryType: { span: 6 },
    facility: { span: 6 },
    insuranceGroup: { span: 6 },

    isDuplicateAllowed: { span: 4, rowBreakBefore: true, checkboxRow: true },
    isInactive: { span: 4, checkboxRow: true },
    isHighTech: { span: 4, checkboxRow: true },
    isReportRequired: { span: 4, checkboxRow: true },
    isOutpatient: { span: 4, checkboxRow: true },
    isInpatient: { span: 4, checkboxRow: true },

    codeTT: { span: 12, rowBreakBefore: true },
    nameTT: { span: 12 },
};

const ClinicServiceObjectFieldTemplate: React.FC<ObjectFieldTemplateProps> = ({ properties }) => {
    const rows: Array<typeof properties> = [];
    let currentRow: typeof properties = [];

    const orderedProperties = [...properties].sort((a, b) => {
        const keys = Object.keys(FIELD_LAYOUT);
        return keys.indexOf(a.name) - keys.indexOf(b.name);
    });

    orderedProperties.forEach((prop) => {
        const layout = FIELD_LAYOUT[prop.name];
        if (!layout) return;

        if (layout.rowBreakBefore && currentRow.length > 0) {
            rows.push(currentRow);
            currentRow = [];
        }
        currentRow.push(prop);
    });

    if (currentRow.length > 0) rows.push(currentRow);

    return (
        <div className={styles["clinic-form"]}>
            {rows.map((row, rowIdx) => {
                const firstFieldName = row[0]?.name;
                const firstLayout = FIELD_LAYOUT[firstFieldName] ?? {};
                const isCheckboxRow = firstLayout.checkboxRow;
                const sectionLabel = firstLayout.sectionLabel;

                return (
                    <React.Fragment key={rowIdx}>
                        {sectionLabel && (
                            <div className={styles["clinic-form__section-label"]}>
                                {sectionLabel}
                            </div>
                        )}

                        <Row
                            gutter={16}
                            align={isCheckboxRow ? "middle" : "top"}
                            className={`${styles["clinic-form__row"]} ${
                                isCheckboxRow ? styles["clinic-form__row--checkbox"] : ""
                            }`}
                        >
                            {row.map((prop) => {
                                const layout = FIELD_LAYOUT[prop.name] ?? { span: 6 };

                                return (
                                    <Col
                                        key={prop.name}
                                        span={layout.span}
                                        className={`${styles["clinic-form__col"]} ${
                                            isCheckboxRow
                                                ? styles["clinic-form__col--checkbox"]
                                                : ""
                                        }`}
                                    >
                                        {prop.content}
                                    </Col>
                                );
                            })}
                        </Row>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default ClinicServiceObjectFieldTemplate;

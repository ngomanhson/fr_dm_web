import React, { useState } from "react";
import { Button, DatePicker, InputNumber, Table, Checkbox, Row, Col, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ServicePrice } from "@/pages/ClinicService/_types/clinic.type";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
import { getPriceClinicServiceColumns } from "./colums";

interface Props {
    value: ServicePrice[];
    onChange: (prices: ServicePrice[]) => void;
    isOpenInsurancePrice: boolean;
    onInsuranceChange: (val: boolean) => void;
}

const ServicePriceTable: React.FC<Props> = ({
    value = [],
    onChange,
    isOpenInsurancePrice,
    onInsuranceChange,
}) => {
    const [formObj, setFormObj] = useState<Partial<ServicePrice>>({});

    const handleAdd = () => {
        if (!formObj.priceDV || !formObj.fromDate || !formObj.toDate) {
            message.error("Vui lòng nhập đầy đủ các thông tin Giá DV, Từ ngày và Đến ngày!");
            return;
        }
        if (dayjs(formObj.toDate as any).isBefore(dayjs(formObj.fromDate as any))) {
            message.error("Đến ngày phải lớn hơn hoặc bằng Từ ngày!");
            return;
        }
        if (
            isOpenInsurancePrice &&
            (!formObj.priceBHYT || !formObj.bhytPaid || !formObj.bhytRate)
        ) {
            message.error("Khi mở giá BHYT, vui lòng nhập đầy đủ Giá BHYT, BHYT chi trả và Tỉ lệ!");
            return;
        }

        onChange([...value, { key: Date.now(), ...formObj } as ServicePrice]);
        setFormObj({});
    };

    const columns = getPriceClinicServiceColumns({
        onDelete: (index) => {
            const newPrices = [...value];
            newPrices.splice(index, 1);
            onChange(newPrices);
        },
    });

    return (
        <div className={styles["price-table"]}>
            {/* row 1 */}
            <Row gutter={16} align="bottom" className={styles["price-table__row"]}>
                <Col span={2} className={styles["price-table__col"]}>
                    <Checkbox
                        checked={isOpenInsurancePrice}
                        onChange={(e) => onInsuranceChange(e.target.checked)}
                    >
                        Mở giá BHYT
                    </Checkbox>
                </Col>

                <Col span={4} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        Giá BHYT{" "}
                        {isOpenInsurancePrice && <span className={styles["required"]}>*</span>}
                    </div>
                    <InputNumber
                        disabled={!isOpenInsurancePrice}
                        value={formObj.priceBHYT}
                        onChange={(v) => setFormObj((s) => ({ ...s, priceBHYT: v || undefined }))}
                        className={styles["price-table__input"]}
                        addonAfter="VNĐ"
                        min={0}
                        precision={0}
                    />
                </Col>

                <Col span={6} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        Giá DV <span className={styles["required"]}>*</span>
                    </div>
                    <InputNumber
                        value={formObj.priceDV}
                        onChange={(v) => setFormObj((s) => ({ ...s, priceDV: v || undefined }))}
                        className={styles["price-table__input"]}
                        addonAfter="VNĐ"
                        min={0}
                        precision={0}
                    />
                </Col>

                <Col span={6} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        BHYT chi trả{" "}
                        {isOpenInsurancePrice && <span className={styles["required"]}>*</span>}
                    </div>
                    <InputNumber
                        disabled={!isOpenInsurancePrice}
                        value={formObj.bhytPaid}
                        onChange={(v) => setFormObj((s) => ({ ...s, bhytPaid: v || undefined }))}
                        className={styles["price-table__input"]}
                        addonAfter="VNĐ"
                        min={0}
                        precision={0}
                    />
                </Col>

                <Col span={6} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        Tỉ lệ BHYT chi trả{" "}
                        {isOpenInsurancePrice && <span className={styles["required"]}>*</span>}
                    </div>
                    <InputNumber
                        disabled={!isOpenInsurancePrice}
                        value={formObj.bhytRate}
                        onChange={(v) => setFormObj((s) => ({ ...s, bhytRate: v || undefined }))}
                        className={styles["price-table__input"]}
                        addonAfter="%"
                        min={0}
                        max={999}
                        precision={0}
                    />
                </Col>
            </Row>

            {/* row 2 */}
            <Row gutter={16} align="bottom" className={styles["price-table__row--second"]}>
                <Col span={6} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        Từ ngày <span className={styles["required"]}>*</span>
                    </div>
                    <DatePicker
                        format="DD/MM/YYYY"
                        value={formObj.fromDate as any}
                        onChange={(v) => setFormObj((s) => ({ ...s, fromDate: v || undefined }))}
                        className={styles["price-table__input"]}
                    />
                </Col>

                <Col span={6} className={styles["price-table__col"]}>
                    <div className={styles["price-table__label"]}>
                        Đến ngày <span className={styles["required"]}>*</span>
                    </div>
                    <DatePicker
                        format="DD/MM/YYYY"
                        value={formObj.toDate as any}
                        onChange={(v) => setFormObj((s) => ({ ...s, toDate: v || undefined }))}
                        className={styles["price-table__input"]}
                    />
                </Col>

                <Col span={1} className={styles["price-table__action"]}>
                    <Button
                        icon={<PlusOutlined />}
                        onClick={handleAdd}
                        shape="circle"
                        className={styles["price-table__add-btn"]}
                    />
                </Col>
            </Row>

            <Table
                columns={columns}
                dataSource={value}
                rowKey="key"
                pagination={false}
                size="small"
                bordered
            />
        </div>
    );
};

export default ServicePriceTable;

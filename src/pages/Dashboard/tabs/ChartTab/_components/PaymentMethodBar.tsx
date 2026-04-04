import { useState } from "react";
import { Form, Typography } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styles from "../styles.module.scss";
import { formatCurrency } from "@/utils";
import InputItem from "@/components/InputItem";

const { Text } = Typography;

const paymentDataMap: Record<string, any[]> = {
    cash: [{ name: "01/11/2025", value: 200000000 }],
    qrmb_dynamic: [{ name: "01/11/2025", value: 300000000 }],
    qrmb_static: [{ name: "01/11/2025", value: 100000000 }],
    pos: [{ name: "01/11/2025", value: 50000000 }],
    other: [{ name: "02/11/2025", value: 60000000 }],
};

const PaymentMethodBar = () => {
    const [method, setMethod] = useState("cash");
    const chartData = paymentDataMap[method];

    const methodOptions = [
        { label: "Tiền mặt", value: "cash" },
        { label: "QRMB Động", value: "qrmb_dynamic" },
        { label: "QRMB Tĩnh", value: "qrmb_static" },
        { label: "POS", value: "pos" },
        { label: "Chuyển khoản khác", value: "other" },
    ];

    return (
        <div className={styles.chartCard}>
            <div className={styles.chartCard__header}>
                <h3 className={styles.chartCard__subtitle}>Doanh thu theo hình thức thanh toán</h3>

                <Form
                    initialValues={{
                        method: "cash",
                    }}
                >
                    <InputItem
                        name="method"
                        type="select"
                        options={methodOptions}
                        placeholder="Chọn hình thức"
                        style={{ width: 160 }}
                        value={method}
                        onChange={setMethod}
                    />
                </Form>
            </div>

            <div className={styles.statGroup}>
                <div className={styles.statGroup__wrapper}>
                    <Text className={styles.statGroup__label}>Giá trị giao dịch</Text>
                    <div className={styles.statGroup__price}>
                        501.79 tr <span className={styles.statGroup__tag}>↑ 0%</span>
                    </div>
                    <div className={styles.statGroup__deliver}>
                        1.274 giao dịch <span className={styles.statGroup__tag}>↑ 0%</span>
                    </div>
                </div>
            </div>

            <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis
                            width={"auto"}
                            tickFormatter={(v) => formatCurrency(v)}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip formatter={(v: any) => formatCurrency(v)} />
                        <Bar dataKey="value" fill="#4299e1" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PaymentMethodBar;

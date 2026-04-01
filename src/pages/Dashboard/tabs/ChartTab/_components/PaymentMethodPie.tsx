import React from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import styles from "../styles.module.scss";

const paymentPieData = [
    { name: "Tiền mặt", value: 15, fill: "#2c5a7a" },
    { name: "QRMB Động", value: 60, fill: "#d97d48" },
    { name: "QRMB Tĩnh", value: 25, fill: "#2d6a2e" },
];

const PaymentPieChart: React.FC = () => {
    return (
        <div className={`${styles.chartCard} ${styles.chartCard__pie}`}>
            <h3 className={styles.chartCard__titleCenter}>
                Doanh thu theo hình thức thanh toán <br />
                <span>(Tổng theo kỳ báo cáo)</span>
            </h3>
            <div style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={paymentPieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={false}
                            labelLine={false}
                        />
                        <Tooltip />
                        <Legend verticalAlign="bottom" align="center" iconType="square" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PaymentPieChart;

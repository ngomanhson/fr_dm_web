import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";
import styles from "../styles.module.scss";
import { formatCurrency } from "@/utils";

const objectData = [
    { date: "13/03/2025", insurance: 15000000, service: 10000000 },
    { date: "14/03/2025", insurance: 20000000, service: 9000000 },
    { date: "15/03/2025", insurance: 14000000, service: 23000000 },
];

const RevenueObjectChart: React.FC = () => {
    return (
        <div className={styles.chartCard}>
            <h3 className={styles.chartCard__title}>DOANH THU THEO ĐỐI TƯỢNG</h3>

            <div style={{ height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={objectData}
                        margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                    >
                        <XAxis dataKey="date" />
                        <YAxis
                            tick={false}
                            axisLine={false}
                            tickLine={false}
                            label={{
                                value: "TỔNG TIỀN (VND)",
                                angle: -90,
                                position: "center",
                                dx: -30,
                                style: { textAnchor: "middle", fontWeight: 500 },
                            }}
                        />
                        <Tooltip
                            formatter={(value: any) => formatCurrency(value)}
                            cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        />

                        <Legend verticalAlign="bottom" iconType="square" />

                        <Bar
                            dataKey="insurance"
                            name="Đối tượng Bảo hiểm"
                            fill="#2c5a7a"
                            stackId="a"
                        >
                            <LabelList
                                dataKey="insurance"
                                position="inside"
                                style={{ fill: "#fff", fontSize: 12 }}
                                formatter={(v: any) => (v > 0 ? formatCurrency(v) : "")}
                            />
                        </Bar>

                        <Bar dataKey="service" name="Đối tượng Dịch vụ" fill="#e36f2d" stackId="a">
                            <LabelList
                                dataKey="service"
                                position="inside"
                                style={{ fill: "#fff", fontSize: 12 }}
                                formatter={(v: any) => (v > 0 ? formatCurrency(v) : "")}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueObjectChart;

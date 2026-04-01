import styles from "./styles.module.scss";
import RevenueObjectChart from "./_components/RevenueByObject";
import PaymentMethodBar from "./_components/PaymentMethodBar";
import PaymentPieChart from "./_components/PaymentMethodPie";
import FilterBar from "./_components/FilterBar";

export default function DashboardPage() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__container}>
                <header className={styles.dashboard__header}>
                    <h1 className={styles.dashboard__headerTitle}>
                        BÁO CÁO DOANH THU TỔNG HỢP TOÀN BỆNH VIỆN THEO NGÀY
                    </h1>
                </header>

                <FilterBar />

                <div className={styles.dashboard__content}>
                    <RevenueObjectChart />

                    <div className={styles.dashboard__row}>
                        <div className={styles.dashboard__col}>
                            <PaymentMethodBar />
                        </div>
                        <div className={styles.dashboard__col}>
                            <PaymentPieChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

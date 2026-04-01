import PaymentMethodBar from "./_components/PaymentMethodBar";
import PaymentPieChart from "./_components/PaymentMethodPie";
import RevenueObjectChart from "./_components/RevenueByObject";
import styles from "./styles.module.scss";

function RevenueTab() {
    return (
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
    );
}

export default RevenueTab;

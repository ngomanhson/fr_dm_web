import styles from "./styles.module.scss";
import FilterBar from "./_components/FilterBar";
import { Tabs } from "antd";
import { dashboardTabs } from "./tabs/config";

export default function DashboardPage() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__container}>
                <header className={styles.dashboard__header}>
                    <h1 className={styles.dashboard__headerTitle}>DOANH THU THEO NGÀY</h1>
                    <FilterBar />
                </header>

                <Tabs
                    items={dashboardTabs.map((tab) => ({
                        key: tab.key,
                        label: tab.label,
                        children: <tab.component />,
                    }))}
                />
            </div>
        </div>
    );
}

import React from "react";
import { DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import styles from "./styles.module.scss";

const FilterBar: React.FC = () => {
    const today = dayjs();

    const disabledDate = (current: any) => {
        return current && current > dayjs().endOf("day");
    };

    const handleSearch = () => {
        console.log("Search clicked");
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filter__inputs}>
                <DatePicker
                    defaultValue={today}
                    format="DD/MM/YYYY"
                    placeholder="Chọn ngày"
                    className={styles.filter__picker}
                    disabledDate={disabledDate}
                />
                <DatePicker
                    defaultValue={today}
                    format="DD/MM/YYYY"
                    placeholder="Chọn ngày"
                    className={styles.filter__picker}
                    disabledDate={disabledDate}
                />
            </div>
            <Button
                type="primary"
                icon={<SearchOutlined />}
                className={styles.filter__button}
                onClick={handleSearch}
            >
                Tìm kiếm
            </Button>
        </div>
    );
};

export default FilterBar;

import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
import InputItem from "@/components/InputItem";

const FilterBar: React.FC = () => {
    const today = dayjs();

    const disabledFutureDate = (today: any) => (current: any) => {
        return current && current > today.endOf("day");
    };

    const handleSearch = () => {
        console.log("Search clicked");
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filter__inputs}>
                <InputItem
                    name="fromDate"
                    type="datepicker"
                    defaultValue={today}
                    disabledDate={disabledFutureDate(today)}
                />

                <InputItem
                    name="toDate"
                    type="datepicker"
                    defaultValue={today}
                    disabledDate={disabledFutureDate(today)}
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

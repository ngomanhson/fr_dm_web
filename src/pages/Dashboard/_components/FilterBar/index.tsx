import React from "react";
import { Button, Form } from "antd";
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
        <Form
            className={styles.filter}
            initialValues={{
                fromDate: today,
                toDate: today,
            }}
        >
            <div className={styles.filter__inputs}>
                <InputItem
                    name="fromDate"
                    type="datepicker"
                    disabledDate={disabledFutureDate(today)}
                />

                <InputItem
                    name="toDate"
                    type="datepicker"
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
        </Form>
    );
};

export default FilterBar;

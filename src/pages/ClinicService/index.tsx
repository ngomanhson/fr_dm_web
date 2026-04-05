import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { ClinicServicesData } from "@/mocks/clinic-service.data";
import ServiceFilter from "./_components/ServiceFilter";
import ServiceTable from "./_components/ServiceTable";
import type { ClinicService, ClinicServiceFilter } from "@/pages/ClinicService/_types/clinic.type";

const FILTER_MAP: Record<keyof Omit<ClinicServiceFilter, "page" | "size">, keyof ClinicService> = {
    facility: "facility",
    serviceType: "serviceType",
    serviceGroup: "serviceGroup",
    keyword: "serviceName",
};

const ClinicServicePage: React.FC = () => {
    const [filters, setFilters] = useState<ClinicServiceFilter>({});

    const handleSearch = useCallback((values: ClinicServiceFilter) => {
        setFilters(values);
    }, []);

    const filteredData = useMemo(() => {
        return ClinicServicesData.filter((item) =>
            (Object.keys(FILTER_MAP) as Array<keyof typeof FILTER_MAP>).every((filterKey) => {
                const dataField = FILTER_MAP[filterKey];
                const filterVal = filters[filterKey];
                const itemVal = item[dataField];
                return (
                    !filterVal ||
                    (typeof itemVal === "string" &&
                        itemVal.toLowerCase().includes(filterVal.toLowerCase()))
                );
            }),
        );
    }, [filters]);

    return (
        <div className={styles["clinic-container"]}>
            <div className={styles["search-section"]}>
                <ServiceFilter onSearch={handleSearch} onCreate={() => console.log("create")} />
            </div>
            <div className={styles["table-section"]}>
                <ServiceTable data={filteredData} />
            </div>
        </div>
    );
};

export default ClinicServicePage;

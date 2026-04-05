import type { Dayjs } from "dayjs";

export interface ServicePrice {
    key?: string | number;
    priceDV: number;
    priceBHYT?: number;
    bhytPaid?: number;
    bhytRate?: number;
    fromDate?: string | Dayjs;
    toDate?: string | Dayjs;
}

export interface ClinicService {
    id: string;
    serviceName: string;
    serviceType: string;
    serviceGroup: string;
    unit: string;

    insuranceCode?: string;
    insuranceName?: string;
    serviceGroupDetail?: string;
    testTubeName?: string;
    surgeryType?: string;
    facility?: string;
    insuranceGroup?: string;

    isDuplicateAllowed: boolean;
    isInactive: boolean;
    isHighTech: boolean;
    isReportRequired: boolean;
    isOutpatient: boolean;
    isInpatient: boolean;

    codeTT: string;
    nameTT: string;
    isOpenInsurancePrice: boolean;

    prices?: ServicePrice[];
}

export interface ClinicServiceFilter {
    facility?: string;
    serviceType?: string;
    serviceGroup?: string;
    keyword?: string;
    page?: number;
    size?: number;
}
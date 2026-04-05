import type { RJSFSchema, UiSchema } from "@rjsf/utils";
import { ClinicServicesData } from "@/mocks/clinic-service.data";

const uniqueOptions = (field: keyof typeof ClinicServicesData[0]) =>
    Array.from(new Set(ClinicServicesData.map((s) => s[field]).filter(Boolean))).map((v) => ({
        label: v as string,
        value: v as string,
    }));

export const searchSchema: RJSFSchema = {
    type: "object",
    properties: {
        facility: {
            type: "string",
            title: "Cơ sở",
            oneOf: uniqueOptions("facility").map(({ label, value }) => ({
                const: value,
                title: label,
            })),
        },
        serviceType: {
            type: "string",
            title: "Loại dịch vụ",
            oneOf: uniqueOptions("serviceType").map(({ label, value }) => ({
                const: value,
                title: label,
            })),
        },
        serviceGroup: {
            type: "string",
            title: "Nhóm dịch vụ",
            oneOf: uniqueOptions("serviceGroup").map(({ label, value }) => ({
                const: value,
                title: label,
            })),
        },
        keyword: {
            type: "string",
            title: "Tên dịch vụ",
        },
    },
};

export const uiSchema: UiSchema = {
    facility: { "ui:placeholder": "Chọn cơ sở" },
    serviceType: { "ui:placeholder": "Chọn loại dịch vụ" },
    serviceGroup: { "ui:placeholder": "Chọn nhóm dịch vụ" },
    keyword: { "ui:placeholder": "Nhập tên dịch vụ" },
};

export const fieldLayout = {
    firstRow: ["facility", "serviceType", "serviceGroup"],
    secondRow: ["keyword"],
};
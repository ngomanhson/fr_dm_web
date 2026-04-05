import type { RJSFSchema, UiSchema } from "@rjsf/utils";

export const serviceFormSchema: RJSFSchema = {
    type: "object",
    required: ["serviceName", "id", "serviceType", "serviceGroup", "unit", "codeTT", "nameTT"],
    properties: {
        // Hàng 1
        serviceName: { type: "string", title: "Tên dịch vụ", maxLength: 250 },
        id: { type: "string", title: "Mã dịch vụ", maxLength: 25, pattern: "^[a-zA-Z0-9]+$" },
        serviceType: { type: "string", title: "Loại dịch vụ" },
        serviceGroup: { type: "string", title: "Nhóm dịch vụ" },

        // Hàng 2
        insuranceCode: { type: "string", title: "Mã DV BHYT", maxLength: 25, pattern: "^[a-zA-Z0-9]*$" },
        insuranceName: { type: "string", title: "Tên DV BHYT", maxLength: 250 },
        serviceGroupDetail: { type: "string", title: "Chi tiết nhóm dịch vụ" },
        testTubeName: { type: "string", title: "Tên ống nghiệm" },

        // Hàng 3
        unit: { type: "string", title: "ĐVT" },
        surgeryType: { type: "string", title: "Loại PT - TT" },
        facility: { type: "string", title: "Cơ sở" },
        insuranceGroup: { type: "string", title: "Nhóm dịch vụ BHYT" },

        // Hàng 4 — Checkboxes
        isDuplicateAllowed: { type: "boolean", title: "Chỉ định trùng", default: false },
        isInactive: { type: "boolean", title: "Ngưng sử dụng", default: false },
        isHighTech: { type: "boolean", title: "Kỹ thuật cao", default: false },
        isReportRequired: { type: "boolean", title: "Bắt buộc nhập TT", default: false },
        isOutpatient: { type: "boolean", title: "Ngoại trú", default: false },
        isInpatient: { type: "boolean", title: "Nội trú", default: false },

        // Hàng 5 — Thông tin BHYT
        codeTT: { type: "string", title: "Mã theo TT", maxLength: 25, pattern: "^[a-zA-Z0-9]+$" },
        nameTT: { type: "string", title: "Tên TT", maxLength: 250 },
    },
};

export const getServiceFormUiSchema = (mode: "create" | "edit"): UiSchema => ({
    "ui:order": [
        "serviceName", "id", "serviceType", "serviceGroup",
        "insuranceCode", "insuranceName", "serviceGroupDetail", "testTubeName",
        "unit", "surgeryType", "facility", "insuranceGroup",
        "isDuplicateAllowed", "isInactive", "isHighTech", "isReportRequired", "isOutpatient", "isInpatient",
        "codeTT", "nameTT",
    ],
    id: {
        "ui:disabled": mode === "edit",
        "ui:placeholder": "Nhập",
    },
    serviceType: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    serviceGroup: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    serviceGroupDetail: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    testTubeName: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    unit: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    surgeryType: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    facility: { "ui:widget": "select", "ui:placeholder": "Chọn" },
    insuranceGroup: { "ui:widget": "select", "ui:placeholder": "Chọn" },

    serviceName: { "ui:placeholder": "Nhập" },
    insuranceCode: { "ui:placeholder": "Nhập" },
    insuranceName: { "ui:placeholder": "Nhập" },
    codeTT: { "ui:placeholder": "Nhập" },
    nameTT: { "ui:placeholder": "Nhập" },
});
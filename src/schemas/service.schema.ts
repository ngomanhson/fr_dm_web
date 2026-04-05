import type { RJSFSchema, UiSchema } from "@rjsf/utils";

export const serviceSchema: RJSFSchema = {
    type: "object",
    required: ["serviceName", "id", "serviceType", "serviceGroup", "unit", "surgeryType", "codeTT", "nameTT"],
    properties: {
        // hàng 1
        serviceName: { type: "string", title: "Tên dịch vụ", maxLength: 250 },
        id: { type: "string", title: "Mã dịch vụ", maxLength: 25, pattern: "^[a-zA-Z0-9_]+$" },
        serviceType: { type: "string", title: "Loại dịch vụ" },
        serviceGroup: { type: "string", title: "Nhóm dịch vụ" },

        // hàng 2
        insuranceCode: { type: "string", title: "Mã DV BHYT", maxLength: 25, pattern: "^[a-zA-Z0-9_]+$" },
        insuranceName: { type: "string", title: "Tên DV BHYT", maxLength: 250 },
        serviceGroupDetail: { type: "string", title: "Chi tiết nhóm dịch vụ" },
        testTubeName: { type: "string", title: "Tên ống nghiệm" },

        // hàng 3
        unit: { type: "string", title: "ĐVT" },
        surgeryType: { type: "string", title: "Loại PT - TT" },
        facility: { type: "string", title: "Cơ sở" },
        insuranceGroup: { type: "string", title: "Nhóm dịch vụ BHYT" },

        // hàng 4: Checkboxes
        isDuplicateAllowed: { type: "boolean", title: "Chỉ định trùng", default: false },
        isInactive: { type: "boolean", title: "Ngưng sử dụng", default: false },
        isHighTech: { type: "boolean", title: "Kỹ thuật cao", default: false },
        isReportRequired: { type: "boolean", title: "Bắt buộc nhập TT", default: false },
        isOutpatient: { type: "boolean", title: "Ngoại trú", default: true },
        isInpatient: { type: "boolean", title: "Nội trú", default: false },

        // hàng 5: BHYT
        codeTT: { type: "string", title: "Mã theo TT", maxLength: 25, pattern: "^[a-zA-Z0-9_]+$" },
        nameTT: { type: "string", title: "Tên TT", maxLength: 250 },
    }
};

export const serviceUiSchema: UiSchema = {
    "ui:submitButtonOptions": { norender: true },
    "ui:classNames": "rjsf-grid-container", // class wrapper Form

    // grid 24
    serviceName: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-6" },
    id: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-6" },
    serviceType: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },
    serviceGroup: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },

    insuranceCode: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-6" },
    insuranceName: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-6" },
    serviceGroupDetail: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },
    testTubeName: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },

    unit: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },
    surgeryType: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },
    facility: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },
    insuranceGroup: { "ui:widget": "select", "ui:placeholder": "Chọn", "ui:classNames": "col-span-6" },

    // chia 6 cột, mỗi ô 4 phần
    isDuplicateAllowed: { "ui:classNames": "col-span-4 custom-checkbox" },
    isInactive: { "ui:classNames": "col-span-4 custom-checkbox" },
    isHighTech: { "ui:classNames": "col-span-4 custom-checkbox" },
    isReportRequired: { "ui:classNames": "col-span-4 custom-checkbox" },
    isOutpatient: { "ui:classNames": "col-span-4 custom-checkbox" },
    isInpatient: { "ui:classNames": "col-span-4 custom-checkbox" },

    // BHYT  /2
    codeTT: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-12" },
    nameTT: { "ui:placeholder": "Nhập", "ui:classNames": "col-span-12" },
};
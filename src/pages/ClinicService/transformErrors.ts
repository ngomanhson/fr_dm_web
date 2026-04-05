import type { RJSFValidationError } from "@rjsf/utils";

export const transformErrors = (errors: RJSFValidationError[]) => {
    return errors.map((error) => {
        const { name, params, property } = error;
        if (name === "required") {
            const m = params.missingProperty;
            const labels: Record<string, string> = { serviceName: "Tên dịch vụ", id: "Mã dịch vụ", serviceType: "Loại dịch vụ", serviceGroup: "Nhóm dịch vụ", unit: "Đơn vị tính", codeTT: "Mã theo TT", nameTT: "Tên TT" };
            error.message = `${labels[m] || "Trường này"} không được để trống`;
        } else if (name === "pattern" && (property === ".id" || property === ".codeTT")) {
            error.message = "Không chứa dấu và khoảng trắng";
        }
        return error;
    });
};
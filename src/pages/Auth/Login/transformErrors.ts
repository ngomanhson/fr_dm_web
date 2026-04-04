import type { RJSFValidationError } from "@rjsf/utils";

export const transformErrors = (errors: RJSFValidationError[]) => {
    return errors.map((error) => {
        const { name, params } = error;

        if (name === "required") {
            const missingField = params.missingProperty;

            let fieldLabel = "Trường này";
            if (missingField === "email") fieldLabel = "Email";
            if (missingField === "password") fieldLabel = "Mật khẩu";

            error.message = `${fieldLabel} không được để trống`;
        }

        else if (name === "format") {
            if (params.format === "email") {
                error.message = "Email không đúng định dạng (VD: abc@gmail.com)";
            }
        }

        else if (name === "minLength") {
            error.message = `Vui lòng nhập tối thiểu ${params.limit} ký tự`;
        }

        return error;
    });
};
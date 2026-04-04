import type { RJSFSchema, UiSchema } from "@rjsf/utils";

export const loginSchema: RJSFSchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: { type: "string", title: "Email", format: "email" },
        password: { type: "string", title: "Mật khẩu", minLength: 6 },
    },
};

export const loginUiSchema: UiSchema = {
    email: { "ui:widget": "email", "ui:placeholder": "Nhập email của bạn" },
    password: { "ui:widget": "password", "ui:placeholder": "Nhập mật khẩu" },
};
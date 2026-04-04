import type { RegistryWidgetsType, WidgetProps } from "@rjsf/utils";
import InputItem from "@/components/InputItem";
import styles from "../styles.module.scss";

export const loginWidgets: RegistryWidgetsType = {
    TextWidget: (props: WidgetProps) => {
        const { value, label, onChange, onBlur, placeholder, options, schema, rawErrors, id } =
            props;
        const errorMessage = rawErrors?.[0];

        return (
            <div className={styles["login-page__field"]}>
                <InputItem
                    label={label}
                    name={id}
                    value={value || ""}
                    onChange={(e: any) => onChange(e.target.value)}
                    onBlur={() => onBlur(id, value)}
                    placeholder={placeholder}
                    type={options.uiWidget === "password" ? "password" : "text"}
                    size="large"
                    status={errorMessage ? "error" : ""}
                    required={!!schema.required}
                />
                {errorMessage && (
                    <span className={styles["login-page__error-msg"]}>{errorMessage}</span>
                )}
            </div>
        );
    },
};

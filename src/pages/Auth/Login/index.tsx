import React from "react";
import { Button, Typography, Divider, Card } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";

import styles from "./styles.module.scss";
import LoginDecor from "@/assets/images/login-decor.png";
import { loginSchema, loginUiSchema } from "@/schemas/auth.schema";
import { loginWidgets } from "./_components/LoginWidgets";
import { transformErrors } from "./transformErrors";
import { useNavigate } from "react-router-dom";
import config from "@/configs";

const { Text, Title } = Typography;

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const onSubmit = ({ formData }: any) => {
        console.log("Data:", formData);
        navigate(config.routes.dashboard);
    };

    return (
        <div className={styles["login-page"]}>
            <Card className={styles["login-page__card"]}>
                <div className={styles["login-page__wrapper"]}>
                    <div className={styles["login-page__side-image"]}>
                        <img src={LoginDecor} alt="login" />
                    </div>

                    <div className={styles["login-page__form-container"]}>
                        <div className={styles["login-page__header"]}>
                            <Title level={3}>Chào mừng quay lại</Title>
                            <Text type="secondary">Đăng nhập để tiếp tục hệ thống</Text>
                        </div>

                        <Form
                            liveValidate={true}
                            focusOnFirstError={true}
                            schema={loginSchema}
                            uiSchema={loginUiSchema}
                            validator={validator}
                            widgets={loginWidgets}
                            transformErrors={transformErrors}
                            onSubmit={onSubmit}
                            noHtml5Validate
                            showErrorList={false}
                        >
                            <div className={styles["login-page__form-actions"]}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    className={styles["login-page__btn-submit"]}
                                >
                                    Đăng nhập
                                </Button>
                                <Divider plain>
                                    <Text className={styles["login-page__divider-text"]}>Hoặc</Text>
                                </Divider>
                                <Button
                                    icon={<GoogleOutlined />}
                                    size="large"
                                    block
                                    className={styles["login-page__btn-google"]}
                                >
                                    Đăng nhập với Google
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;

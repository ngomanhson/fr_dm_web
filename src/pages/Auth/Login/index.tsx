import { useState } from "react";
import { Button, Input, Typography, Divider, Card } from "antd";
import { MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginBody, type LoginBodyType } from "@/schemas/auth.schema";
import styles from "./styles.module.scss";
import LoginDecor from "@/assets/images/login-decor.png";
import { useNavigate } from "react-router-dom";
import routes from "@/configs/routes";
const { Text, Title } = Typography;

export default function LoginForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: LoginBodyType) => {
        setLoading(true);
        try {
            console.log(data);
            navigate(routes.dashboard);
        } catch (err) {
            form.setError("root", {
                message: "Login failed",
            });
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card} bodyStyle={{ padding: 0 }}>
                <div className={styles.wrapper}>
                    {/* LEFT - IMAGE */}
                    <div className={styles.image}>
                        <img src={LoginDecor} alt="login" />
                    </div>

                    {/* RIGHT - FORM */}
                    <div className={styles.formContainer}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={styles.form}
                            noValidate
                        >
                            <div className={styles.header}>
                                <Title level={3}>Chào mừng quay lại</Title>
                                <Text type="secondary">Đăng nhập để tiếp tục sử dụng hệ thống</Text>
                            </div>
                            {/* Email */}
                            <div className={styles.field}>
                                <Text className={styles.label}>Email</Text>

                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            size="large"
                                            placeholder="Enter your email"
                                            prefix={<MailOutlined />}
                                            status={form.formState.errors.email ? "error" : ""}
                                        />
                                    )}
                                />

                                <Text type="danger" className={styles.error}>
                                    {form.formState.errors.email?.message}
                                </Text>
                            </div>

                            {/* Password */}
                            <div className={styles.field}>
                                <Text className={styles.label}>Mật khẩu</Text>

                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Input.Password
                                            {...field}
                                            size="large"
                                            placeholder="********"
                                            prefix={<LockOutlined />}
                                            status={form.formState.errors.password ? "error" : ""}
                                        />
                                    )}
                                />

                                <Text type="danger" className={styles.error}>
                                    {form.formState.errors.password?.message}
                                </Text>
                            </div>

                            {/* Root error */}
                            {form.formState.errors.root && (
                                <Text type="danger" className={styles.error}>
                                    {form.formState.errors.root.message}
                                </Text>
                            )}

                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                loading={loading}
                                block
                            >
                                Đăng nhập
                            </Button>

                            <Divider>Hoặc tiếp tục với</Divider>

                            <Button icon={<GoogleOutlined />} size="large" block>
                                Đăng nhập với Google
                            </Button>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    );
}

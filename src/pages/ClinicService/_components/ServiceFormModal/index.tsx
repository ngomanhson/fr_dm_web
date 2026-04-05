import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { SaveOutlined, ReloadOutlined, CloseOutlined } from "@ant-design/icons";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { serviceFormSchema, getServiceFormUiSchema } from "./formSchema";
import { transformErrors } from "../../transformErrors";
import ClinicServiceObjectFieldTemplate from "./ClinicServiceObjectFieldTemplate";
import styles from "./styles.module.scss";
import type { ClinicService, ServicePrice } from "@/pages/ClinicService/_types/clinic.type";
import ServicePriceTable from "../ServicePriceTable";

interface Props {
    open: boolean;
    mode: "create" | "edit";
    initialData?: ClinicService;
    onClose: () => void;
    onSubmit: (data: ClinicService) => void;
}

const getInitialFormData = (
    mode: Props["mode"],
    initialData?: ClinicService,
): Partial<ClinicService> => {
    if (mode === "edit" && initialData) return initialData;
    return { isOutpatient: true };
};

const getInitialPrices = (mode: Props["mode"], initialData?: ClinicService): ServicePrice[] => {
    if (mode === "edit" && initialData) return initialData.prices || [];
    return [];
};

const getInitialIsOpenInsurancePrice = (
    mode: Props["mode"],
    initialData?: ClinicService,
): boolean => {
    if (mode === "edit" && initialData) return !!initialData.isOpenInsurancePrice;
    return false;
};

const ServiceFormModalContent: React.FC<Props> = ({
    open,
    mode,
    initialData,
    onClose,
    onSubmit,
}) => {
    const [formData, setFormData] = useState<Partial<ClinicService>>(() =>
        getInitialFormData(mode, initialData),
    );
    const [prices, setPrices] = useState<ServicePrice[]>(() => getInitialPrices(mode, initialData));
    const [isOpenInsurancePrice, setIsOpenInsurancePrice] = useState(() =>
        getInitialIsOpenInsurancePrice(mode, initialData),
    );

    const handleReset = () => {
        setFormData(getInitialFormData(mode, initialData));
        setPrices(getInitialPrices(mode, initialData));
        setIsOpenInsurancePrice(getInitialIsOpenInsurancePrice(mode, initialData));
    };

    const handleFinish = ({ formData: submittedData }: any) => {
        if (prices.length === 0) {
            message.error("Vui lòng thêm ít nhất 1 bảng giá!");
            return;
        }
        onSubmit({ ...submittedData, prices, isOpenInsurancePrice } as ClinicService);
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            width={"100%"}
            footer={null}
            closeIcon={null}
            destroyOnHidden
        >
            <div className={styles["modal-action-bar"]}>
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={() => document.getElementById("rjsf-submit-btn")?.click()}
                >
                    Đồng ý
                </Button>
                <Button icon={<ReloadOutlined />} onClick={handleReset}>
                    Làm mới
                </Button>
                <Button type="primary" icon={<CloseOutlined />} onClick={onClose}>
                    Thoát
                </Button>
            </div>

            <Form
                schema={serviceFormSchema}
                uiSchema={getServiceFormUiSchema(mode)}
                validator={validator}
                formData={formData}
                onChange={({ formData: newData }) => setFormData(newData)}
                onSubmit={handleFinish}
                transformErrors={transformErrors}
                showErrorList={false}
                templates={{ ObjectFieldTemplate: ClinicServiceObjectFieldTemplate }}
            >
                <button type="submit" id="rjsf-submit-btn" style={{ display: "none" }} />
            </Form>

            <ServicePriceTable
                value={prices}
                onChange={setPrices}
                isOpenInsurancePrice={isOpenInsurancePrice}
                onInsuranceChange={setIsOpenInsurancePrice}
            />
        </Modal>
    );
};

const ServiceFormModal: React.FC<Props> = (props) => {
    const initialDataKey = props.initialData
        ? ((props.initialData as ClinicService & { id?: string | number }).id ??
          JSON.stringify(props.initialData))
        : "no-data";

    return (
        <ServiceFormModalContent key={`${props.open}-${props.mode}-${initialDataKey}`} {...props} />
    );
};

export default ServiceFormModal;

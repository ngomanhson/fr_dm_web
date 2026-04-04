import type { RevenuePaymentMethodType } from "@/types/payment.type";

export const calculatePaymentTotals = (data: RevenuePaymentMethodType[]) => {
    return data.reduce(
        (acc, record) => ({
            cash: acc.cash + record.cash,
            qrmbDynamic: acc.qrmbDynamic + record.qrmbDynamic,
            qrmbStatic: acc.qrmbStatic + record.qrmbStatic,
            posMb: acc.posMb + record.posMb,
            transfer: acc.transfer + record.transfer,
            totalPrice: acc.totalPrice + record.totalPrice,
        }),
        {
            cash: 0,
            qrmbDynamic: 0,
            qrmbStatic: 0,
            posMb: 0,
            transfer: 0,
            totalPrice: 0,
        }
    );
};
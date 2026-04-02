export interface PaymentData {
    key: string;
    date: string;
    cash: number;
    qrmbDynamic: number;
    qrmbStatic: number;
    posMb: number;
    transfer: number;
    totalPrice: number;
}

export const paginatedData: PaymentData[] = [
    {
        key: "1",
        date: "04/08/2025",
        cash: 0,
        qrmbDynamic: 683990494.04,
        qrmbStatic: 16752600,
        posMb: 0,
        transfer: 219521392,
        totalPrice: 920264486.04,
    },
];
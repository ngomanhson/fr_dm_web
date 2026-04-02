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

export const paymentData: PaymentData[] = [
    {
        key: "1",
        date: "04/08/2025",
        cash: 0,
        qrmbDynamic: 683990494.04,
        qrmbStatic: 16752.6,
        posMb: 0,
        transfer: 219521.392,
        totalPrice: 920264486.04,
    },
    {
        key: "2",
        date: "03/08/2025",
        cash: 100000,
        qrmbDynamic: 500000000,
        qrmbStatic: 5000.5,
        posMb: 50000,
        transfer: 100000,
        totalPrice: 500755000.5,
    },
    {
        key: "3",
        date: "02/08/2025",
        cash: 200000,
        qrmbDynamic: 300000000,
        qrmbStatic: 10000,
        posMb: 100000,
        transfer: 150000,
        totalPrice: 300560000,
    },
    // Thêm dữ liệu khác tùy ý
];
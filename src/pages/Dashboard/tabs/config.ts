import ChartTab from "./ChartTab";
import ObjectTab from "./ObjectTab";
import PaymentMethodTab from "./PaymentMethodTab";

export const dashboardTabs = [
    {
        key: "charts",
        label: "Biểu đồ",
        component: ChartTab,
    },
    {
        key: "objects",
        label: "Đối tượng",
        component: ObjectTab,
    },
    {
        key: "paymentMethods",
        label: "Hình thức thanh toán",
        component: PaymentMethodTab,
    },
];
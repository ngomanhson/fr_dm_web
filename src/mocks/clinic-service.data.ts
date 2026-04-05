import { type ClinicService } from "@/pages/ClinicService/_types/clinic.type";

export const ClinicServicesData: ClinicService[] = [
    {
        id: "LAB.1000107",
        insuranceCode: "579A7A6",
        facility: "Bệnh viện Thống Nhất",
        serviceName: "Đo hoạt độ ALT (GPT) (Máu)_GỬI MEDIC",
        insuranceName: "Đo hoạt độ ALT (GPT) (Máu)",
        serviceType: "Cận lâm sàng",
        serviceGroup: "Xét nghiệm",
        serviceGroupDetail: "Xét nghiệm hóa sinh máu",
        unit: "Lần",
        insuranceGroup: "Xét nghiệm",
        testTubeName: "Ống đỏ",

        // Trạng thái
        isDuplicateAllowed: false,
        isInactive: false,
        isHighTech: false,
        isReportRequired: false,
        isOutpatient: true,
        isInpatient: true,

        // BHYT
        codeTT: "TT_ALT_107",
        nameTT: "Đo hoạt độ ALT (GPT)",
        isOpenInsurancePrice: true,

        // Lịch sử giá
        prices: [
            {
                key: "price_1",
                priceDV: 150000,
                priceBHYT: 100000,
                bhytPaid: 80000,
                bhytRate: 80,
                fromDate: "2024-01-01",
                toDate: "2024-12-31"
            }
        ]
    },
    {
        id: "TT13_4545",
        insuranceCode: "9B94E49",
        facility: "Bệnh viện Thống Nhất",
        serviceName: "Virus test nhanh",
        insuranceName: "Test nhanh Virus",
        serviceType: "Cận lâm sàng",
        serviceGroup: "Xét nghiệm",
        serviceGroupDetail: "Xét nghiệm vi sinh",
        unit: "Lần",

        isDuplicateAllowed: true,
        isInactive: false,
        isHighTech: false,
        isReportRequired: false,
        isOutpatient: true,
        isInpatient: false,

        codeTT: "TT_VR_4545",
        nameTT: "Test nhanh Virus đường hô hấp",
        isOpenInsurancePrice: false,

        // Không mở giá BHYT nên mảng giá chỉ có giá Dịch vụ
        prices: [
            {
                key: "price_2",
                priceDV: 250000,
                fromDate: "2023-06-01"
            }
        ]
    },
    {
        id: "P12043",
        insuranceCode: "D660B7B",
        facility: "Bệnh viện Thống Nhất",
        serviceName: "PT lại phình đại tràng bẩm sinh",
        insuranceName: "Phẫu thuật phình đại tràng",
        serviceType: "Phẫu thuật - thủ thuật",
        serviceGroup: "Phẫu thuật",
        serviceGroupDetail: "PT Nhi",
        surgeryType: "Phẫu thuật loại 1",
        unit: "Lần",

        isDuplicateAllowed: false,
        isInactive: false,
        isHighTech: true,
        isReportRequired: true,
        isOutpatient: false,
        isInpatient: true,

        codeTT: "TT_PT_12043",
        nameTT: "Phẫu thuật điều trị phình đại tràng bẩm sinh",
        isOpenInsurancePrice: true,

        prices: [
            {
                key: "price_3",
                priceDV: 15000000,
                priceBHYT: 10000000,
                bhytPaid: 8000000,
                bhytRate: 80,
                fromDate: "2022-01-01",
                toDate: "2023-12-31"
            },
            {
                key: "price_4",
                priceDV: 16500000,
                priceBHYT: 12000000,
                bhytPaid: 9600000,
                bhytRate: 80,
                fromDate: "2024-01-01"
            }
        ]
    },
    {
        id: "P12038",
        insuranceCode: "CD4EDE9",
        facility: "Bệnh viện Thống Nhất",
        serviceName: "PT viêm ruột thừa cấp trẻ em dưới 6 tuổi",
        insuranceName: "Phẫu thuật viêm ruột thừa",
        serviceType: "Phẫu thuật - thủ thuật",
        serviceGroup: "Phẫu thuật",
        serviceGroupDetail: "PT Nhi",
        unit: "Lần",

        isDuplicateAllowed: false,
        isInactive: true, // Ví dụ test case ngưng sử dụng
        isHighTech: false,
        isReportRequired: true,
        isOutpatient: false,
        isInpatient: true,

        codeTT: "TT_PT_12038",
        nameTT: "Phẫu thuật viêm ruột thừa cấp",
        isOpenInsurancePrice: false,
    }
];
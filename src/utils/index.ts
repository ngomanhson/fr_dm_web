export const formatCurrency = (value?: number | null): string => {
    if (value === null || value === undefined) return "-";
    return value.toLocaleString("vi-VN");
};

export const formatDate = (value?: string): string => {
    if (!value) return "-";

    const [year, month, day] = value.split("-");
    if (!year || !month || !day) return "-";

    return `${day}-${month}-${year}`;
};
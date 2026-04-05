const routes = {
    dashboard: "/",
    district: "/districts",
    ward: "/wards",
    province: "/provinces",
    clinic_service: "/clinic-services",
    login: "/login",
    not_found: "*",
} as const;

// export type RouteKey = keyof typeof routes;
export default routes;
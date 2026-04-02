const routes = {
    dashboard: "/",
    district: "/districts",
    ward: "/wards",
    province: "/provinces",
    login: "/login",
    not_found: "*",
} as const;

// export type RouteKey = keyof typeof routes;
export default routes;
const routes = {
    dashboard: "/",
    district: "/districts",
    ward: "/wards",
    login: "/login",
    not_found: "*",
} as const;

// export type RouteKey = keyof typeof routes;
export default routes;
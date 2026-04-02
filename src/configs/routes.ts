const routes = {
    dashboard: "/",
    district: "/districts",
    login: "/login",
    not_found: "*",
} as const;

// export type RouteKey = keyof typeof routes;
export default routes;
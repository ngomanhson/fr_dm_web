import { lazy } from "react";
import routes from "@/configs/routes";
import type { AppRoute } from "@/routes/type";

// Import public pages
const NotFound = lazy(() => import("@/components/NotFound"));

// Import private pages
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const DistrictPage = lazy(() => import("@/pages/District"));

// Import auth pages
const LoginPage = lazy(() => import("@/pages/Auth/Login"));

const publicRoutes: AppRoute[] = [
    { path: routes.dashboard, component: DashboardPage },
    { path: routes.district, component: DistrictPage },
    { path: routes.not_found, component: NotFound },
];

const privateRoutes: AppRoute[] = []

const authRoutes: AppRoute[] = [
    { path: routes.login, component: LoginPage, layout: null },
]

export { publicRoutes, privateRoutes, authRoutes };
import { lazy } from "react";
import routes from "@/configs/routes";
import type { AppRoute } from "@/routes/type";

// Import public pages

// Import private pages
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const DistrictPage = lazy(() => import("@/pages/District"));

// Import auth pages

const publicRoutes: AppRoute[] = [
    { path: routes.dashboard, component: DashboardPage },
    { path: routes.district, component: DistrictPage },
];

const privateRoutes: AppRoute[] = []

const authRoutes: AppRoute[] = []

export { publicRoutes, privateRoutes, authRoutes };
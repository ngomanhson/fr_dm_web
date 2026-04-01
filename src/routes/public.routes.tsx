import { lazy } from "react";
import type { AppRoute } from "./type";
import config from "../configs";

// Import pages
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const publicRoutes: AppRoute[] = [{ path: config.routes.dashboard, component: Dashboard }];

export default publicRoutes;

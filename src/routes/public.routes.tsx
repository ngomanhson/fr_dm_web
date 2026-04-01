import { lazy } from "react";
import type { AppRoute } from "./type";
import config from "../configs";

// Import pages
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const District = lazy(() => import("@/pages/District"));

const publicRoutes: AppRoute[] = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.district, component: District },
];

export default publicRoutes;

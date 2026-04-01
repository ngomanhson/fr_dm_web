import { Fragment, Suspense, type ElementType } from "react";
import { Routes, Route } from "react-router-dom";
import type { AppRoute } from "./type";
import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route: AppRoute, index: number) => {
        const Page = route.component;
        let Layout: ElementType = DefaultLayout;

        if (route.layout) {
            Layout = route.layout;
        } else if (route.layout === null) {
            Layout = Fragment;
        }

        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout>
                        <Page />
                    </Layout>
                }
            />
        );
    });
};

function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {renderRoutes(publicRoutes)}
                {renderRoutes(privateRoutes)}
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;

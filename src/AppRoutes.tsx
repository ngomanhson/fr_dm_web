import { Fragment, Suspense, type ElementType } from "react";
import { Routes, Route } from "react-router-dom";
import type { AppRoute } from "@/routes/type";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { publicRoutes, privateRoutes, authRoutes } from "@/routes";

const renderRoutes = (routes: AppRoute[]) => {
    // TODO: handle redirect when call api login success
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
                {renderRoutes(authRoutes)}
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;

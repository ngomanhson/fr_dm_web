import type {
    ComponentType,
    LazyExoticComponent,
    ReactNode,
} from "react";

export type LayoutType = ComponentType<{ children: ReactNode }> | null;

export interface AppRoute {
    path: string;
    component: LazyExoticComponent<ComponentType>;
    layout?: LayoutType;
}
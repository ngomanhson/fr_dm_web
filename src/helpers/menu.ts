export const getActiveMenuItem = (menuItems: any[], pathname: string) => {
    const exact = menuItems.find((item) => item.key === pathname);
    if (exact) return exact;

    const partial = menuItems
        .filter((item) => item.key !== "/")
        .find((item) => pathname.startsWith(item.key));

    return partial || menuItems.find((item) => item.key === "/");
};
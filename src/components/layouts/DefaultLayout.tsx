interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
}

export default DefaultLayout;

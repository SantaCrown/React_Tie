'use client'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[url(/images/register_bg.png)] bg-cover bg-center h-screen">
                {children}
        </div>
    );
}

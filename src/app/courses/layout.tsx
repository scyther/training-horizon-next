import TopNavigationBar from "@/Components/UserFlow/TopNavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <TopNavigationBar/>
    {children}
    </>
  );
}

import TopNavigationBar from "@/components/UserFlow/TopNavigationBar";

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

import Topbar from "@/Components/trainer-dashboard/Topbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* <Topbar/> */}
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}

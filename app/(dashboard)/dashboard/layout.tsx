import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "./Sidebar/page";




const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
      
        <div className="">
        <Sidebar/>
          {children}</div>
      </body>
    </html>
  );
}










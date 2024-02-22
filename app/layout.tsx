import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Siderbar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Healthcare dashboard",
  description: "hulesh jangde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
         
         "bg-[#FFFCF8] overflow-x-hidden"
        )}
        
        >
          <Siderbar/>
          <div className="pl-20 flex-1 ">
          {children}
          </div>
        
          </body>
    </html>
  );
}

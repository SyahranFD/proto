import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {QueryClientProvider} from "react-query";
import ReactQueryProvider from "@/app/query-provider";
import {Toaster} from "@/app/components/ui/toaster";
import {cn} from "@/app/lib/utils";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Proto",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <ReactQueryProvider>

      <body className={cn(poppins.className ,"overflow-x-hidden")}>{children}  <Toaster /></body>
    </ReactQueryProvider>

    </html>
  );
}

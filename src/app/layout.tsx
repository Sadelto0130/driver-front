import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Fleet Platform",
  description: "Mobility Fleet Dashboard",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

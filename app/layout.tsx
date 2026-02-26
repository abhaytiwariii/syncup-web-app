import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SyncUp - Job Portal & Professional Network",
  description:
    "Connect, network, and find the perfect job opportunities with SyncUp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-[#FAFAFA]`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}

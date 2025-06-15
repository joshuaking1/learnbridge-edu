import type { Metadata } from "next";
import "./globals.css";
import { css } from "@styled-system/css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "LearnBridgeEdu - The Future of Learning",
  description:
    "AI-Powered Education for Ghana's next generation. KG to High School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={css({
          fontFamily: "body",
          color: "text.primary",
          bg: "brand.light",
        })}
      >
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

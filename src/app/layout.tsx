import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "北京腾云启航科技有限公司 - 创新科技，引领未来",
  description: "北京腾云启航科技有限公司是一家致力于创新和卓越的科技公司，为客户提供最前沿的技术解决方案。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

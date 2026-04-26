import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise",
  description: "Cultivate high-performance teams through expert learning. Next-Gen Expertise for Modern Enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans transition-colors duration-300">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

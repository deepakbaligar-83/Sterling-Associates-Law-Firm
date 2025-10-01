import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sterling & Associates | Trusted Legal Counsel",
    template: "%s | Sterling & Associates",
  },
  description:
    "A modern, client-focused law firm providing strategic counsel across corporate, litigation, and private client matters.",
  openGraph: {
    title: "Sterling & Associates | Trusted Legal Counsel",
    description:
      "A modern, client-focused law firm providing strategic counsel across corporate, litigation, and private client matters.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steel-beam.org"),
  title: {
    default: "Steel Beam Contractor Solutions LLC",
    template: "%s | Steel Beam",
  },
  description:
    "Contractor-focused bookkeeping, payroll support, job costing, and business advisory services for construction businesses.",
  keywords: [
    "contractor bookkeeping",
    "construction bookkeeping",
    "job costing",
    "payroll support",
    "contractor financial services",
    "contractor accounting",
    "construction payroll",
    "QuickBooks for contractors",
    "contractor business advisory",
    "construction financial management",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://steel-beam.org",
    siteName: "Steel Beam Contractor Solutions LLC",
    title: "Steel Beam Contractor Solutions LLC",
    description:
      "Contractor-focused bookkeeping, payroll support, job costing, and business advisory services for construction businesses.",
    images: [
      {
        url: "/images/steel-beam-social-preview.png",
        width: 1200,
        height: 630,
        alt: "Steel Beam Contractor Solutions LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Beam Contractor Solutions LLC",
    description:
      "Contractor-focused bookkeeping, payroll support, job costing, and business advisory services for construction businesses.",
    images: ["/images/steel-beam-social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

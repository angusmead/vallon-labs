import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vallon Labs — AI Systems Studio",
    template: "%s · Vallon Labs",
  },
  description:
    "Vallon Labs builds AI-powered websites, automation and workflows for businesses ready to operate in the era ahead.",
  applicationName: "Vallon Labs",
  authors: [{ name: "Vallon Labs" }],
  openGraph: {
    title: "Vallon Labs — AI Systems Studio",
    description:
      "Vallon Labs builds AI-powered websites, automation and workflows for businesses ready to operate in the era ahead.",
    siteName: "Vallon Labs",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vallon Labs — AI Systems Studio",
    description:
      "Vallon Labs builds AI-powered websites, automation and workflows for businesses ready to operate in the era ahead.",
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
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

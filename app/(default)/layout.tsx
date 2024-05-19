import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteFooter } from "@/components/layout/footer";
import Header from "@/components/layout/header";
export const metadata: Metadata = {
  metadataBase: new URL("https://foundersforge.pro"), // Change to your project's domain
  title: {
    default: "Curated Startup Ideas, Sent Weekly for Entrepreneurs",
    template: "%s | Founders Forge - Curated Startup Ideas, Sent Weekly for Entrepreneurs",
  },
  description:
    "Join 5,000+ elite entrepreneurs getting curated startup ideas and comphrensive guides on building a product in million dollar niches. Launch your empire this weekend.",
  openGraph: {
    title: "Curated Startup Ideas, Sent Weekly for Entrepreneur",
    description:
      "Join 5,000+ elite entrepreneurs getting curated startup ideas and comphrensive guides on building a product in million dollar niches. Launch your empire this weekend.",
    url: "https://foundersforge.pro",
    siteName: "Founders Forge",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Founders Forge",
    card: "summary_large_image",
  },
  verification: {
    google: "YourGoogleVerificationToken", // Update with your new Google verification token
    yandex: "YourYandexVerificationToken", // Update with your new Yandex verification token
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx("text-black  dark", GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <main className="min-h-screen antialiased">
            <Header />
            {children}
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

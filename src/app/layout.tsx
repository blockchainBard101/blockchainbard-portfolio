import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/ui/interactive-grid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BlockchainBard — A. J. George | AI, Backend & Smart Contract Developer",
    template: "BlockchainBard — %s",
  },
  description: "AI, Backend & Smart Contract Developer. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
  keywords: [
    "blockchain developer",
    "smart contracts",
    "DeFi",
    "AI developer",
    "backend developer",
    "machine learning",
    "Move programming",
    "web3 developer",
    "DevRel",
  ],
  authors: [{ name: "A. J. George", url: "https://blockchainbard.dev" }],
  creator: "A. J. George",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blockchainbard.dev",
    siteName: "BlockchainBard",
    title: "BlockchainBard — A. J. George | AI, Backend & Smart Contract Developer",
    description: "AI, Backend & Smart Contract Developer. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockchainBard — A. J. George | AI, Backend & Smart Contract Developer",
    description: "AI, Backend & Smart Contract Developer. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
    creator: "@blockchainbard",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <InteractiveGrid />
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

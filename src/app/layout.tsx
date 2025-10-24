import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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
  description: "Building on Sui. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
  keywords: [
    "Sui blockchain",
    "smart contracts",
    "DeFi",
    "AI developer",
    "backend developer",
    "blockchain developer",
    "Move programming",
    "Sui SDK",
    "Team Sushi",
    "Voultron Games",
    "Sui on Campus",
  ],
  authors: [{ name: "A. J. George", url: "https://blockchainbard.dev" }],
  creator: "A. J. George",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blockchainbard.dev",
    siteName: "BlockchainBard",
    title: "BlockchainBard — A. J. George | AI, Backend & Smart Contract Developer",
    description: "Building on Sui. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockchainBard — A. J. George | AI, Backend & Smart Contract Developer",
    description: "Building on Sui. Shipping tools, docs, and dApps. Smart contracts, backend systems, and AI—shipped fast and clean.",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

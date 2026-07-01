import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora.in"),
  title: "Nexora Digital Agency | Websites, AI Chatbots & Automation",
  description: "Nexora builds professional websites, AI chatbots, and workflow automation for Indian businesses. Get a free mockup today.",
  openGraph: {
    title: "Nexora Digital Agency | Websites, AI Chatbots & Automation",
    description: "Nexora builds professional websites, AI chatbots, and workflow automation for Indian businesses. Get a free mockup today.",
    url: "https://nexora.in",
    siteName: "Nexora Digital Agency",
    images: [
      {
        url: "https://nexora-sepia-sigma.vercel.app/nexora_logo.png",
        width: 800,
        height: 600,
        alt: "Nexora Digital Agency Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Digital Agency | Websites, AI Chatbots & Automation",
    description: "Nexora builds professional websites, AI chatbots, and workflow automation for Indian businesses. Get a free mockup today.",
    images: ["https://nexora-sepia-sigma.vercel.app/nexora_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${dmSerif.variable} antialiased`}
      >
        {/* Subtle Animated noise overlay for premium feel */}
        <div className="noise-overlay" />
        
        {/* Custom interactive cursor for desktop */}
        <CustomCursor />
        
        {/* Smooth scrolling wrapper */}
        <SmoothScroll>
          {/* Main Content */}
          {children}
        </SmoothScroll>
        
        {/* Floating Widgets */}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}


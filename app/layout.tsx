import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { Navbar } from "@/components/layout/navbar";
import { SideNav } from "@/components/layout/side-nav";
import { SocialLinks } from "@/components/layout/social-links";
import { ScrollIndicator } from "@/components/layout/scroll-indicator";
import { TransitionProvider } from "@/context/transition-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lauther Valladares",
  description: "Portafolio personal de Lauther Valladares - Digital Craftsman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Animated background - fixed, behind everything */}
        <div className="fixed inset-0 z-0 text-white/50">
          <GravityStarsBackground
            starsCount={120}
            starsSize={1.5}
            starsOpacity={0.6}
            glowIntensity={12}
            glowAnimation="ease"
            movementSpeed={0.2}
            mouseInfluence={150}
            mouseGravity="attract"
            gravityStrength={60}
            globalMouse
          />
        </div>

        <TransitionProvider>
          {/* Layout chrome - above background */}
          <Navbar />
          <SideNav />
          <SocialLinks />
          <ScrollIndicator />

          {/* Page content */}
          <div className="relative z-10">
            {children}
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}

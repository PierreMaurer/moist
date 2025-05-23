import type { Metadata } from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import {Can} from "@/components/threejs/Can";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOIST Drink",
  description: "Votre nouvelle boisson préférée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="fixed inset-0 z-0">
            <Can />
          </div>
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  // 1. Critical: Set weight to 'variable' to allow custom axes
  weight: 'variable', 
  variable: '--font-fraunces',
  display: 'swap',
  // 2. Critical: Explicitly include the custom variable axes 
  // (opsz = optical size, SOFT = softness, WONK = wonky/chiseled characters)
  axes: ['opsz'], 
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DispatchOS — Never wonder what to post again.',
  description: 'You create. Dispatch tells the story. One engine. Every channel. Your content on autopilot.',
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

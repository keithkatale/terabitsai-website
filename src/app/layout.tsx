import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { PostHogPageView } from "@/components/PostHogPageView";
import { PostHogProvider } from "@/components/PostHogProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TeraBits AI — Your AI Operations Assistant",
  description:
    "TeraBits gives you an AI operations assistant that works through your software autonomously — all day, every day. Brief it in the morning. It handles the rest.",
  icons: {
    icon: "/logo-terabits.png",
    shortcut: "/logo-terabits.png",
    apple: "/logo-terabits.png",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          defer
          data-website-id="dfid_VSDf4wDZ7Yk43hUJchpj8"
          data-domain="terabitsai.com"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body className="min-h-full bg-black font-sans flex flex-col">
        <PostHogProvider>
          <PostHogPageView />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}

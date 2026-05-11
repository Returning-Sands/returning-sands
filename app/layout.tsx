import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Returning Sands — A Sudanese Cultural Heritage Campaign & Film",
  description:
    "A campaign and short documentary by Paris Quetzal Sistilli and Yusef Bushara, protecting Sudanese cultural memory through events in Cairo (Dec 2026) and London (early 2027).",
  openGraph: {
    title: "Returning Sands",
    description:
      "A Sudanese cultural heritage campaign and short documentary — events in Cairo and London, 2026–2027.",
    type: "website",
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
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-ink">
        {children}
      </body>
    </html>
  );
}

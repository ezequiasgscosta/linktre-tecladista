
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inria_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Ezequias Gabriel Souza da Costa",
  description: "links uteis",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${inriaSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        {children}
      </body>
    </html>
  );
}

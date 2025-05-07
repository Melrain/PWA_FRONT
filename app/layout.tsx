import { Geist, Geist_Mono, ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const kuaile = ZCOOL_KuaiLe({
  weight: "400", // ZCOOL KuaiLe 只有一个粗细
  subsets: ["latin"],
  variable: "--font-kuaile",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="theme-color"
          content="#FFFFFF"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/180.png"
        />
      </head>
      <body
        className={`${kuaile.variable} antialiased bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] overflow-auto`}>
        {children}
      </body>
    </html>
  );
}

"use client";

import Header from "./Header";
import Footer from "./Footer";
import { useInitTelegram } from "../hooks/useInitTelegram";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  useInitTelegram();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

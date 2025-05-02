"use client";

import { useInitTelegram } from "@/hooks/useInitTelegram";
import { SafeHeader } from "./SafeHeader";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  useInitTelegram();
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <SafeHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}

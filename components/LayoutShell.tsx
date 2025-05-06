"use client";

import { useInitTelegram } from "@/hooks/useInitTelegram";
import { useAppEnv } from "@/store/useAppEnv";
import { useTelegramUserStore } from "@/store/useTelegramUserStore";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  useInitTelegram();
  const { isTelegram } = useAppEnv();
  const { isFullScreen } = useTelegramUserStore();
  return (
    <div
      id="layout-shell"
      className={`safe-area-wrapper ${
        isTelegram && isFullScreen ? "pt-28" : "pt-6"
      } flex flex-col min-h-screen bg-[--background] text-[--foreground]`}>
      <main className="flex-1 px-4">{children}</main>
    </div>
  );
}

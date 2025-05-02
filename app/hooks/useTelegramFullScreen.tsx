/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// hooks/useTelegramFullscreen.ts
"use client";

import { useEffect, useState } from "react";
import { viewport } from "@telegram-apps/sdk-react";

export function useTelegramFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      if (viewport.mount.isAvailable() && !viewport.isMounting()) {
        await viewport.mount();
      }

      if (viewport.requestFullscreen.isAvailable() && !viewport.isMounting()) {
        try {
          await viewport.requestFullscreen();
          setIsFullscreen(true);
        } catch (err: any) {
          console.warn("[Telegram] 自动全屏失败", err);
          setError("自动全屏失败，可能需要用户点击触发。");
          setIsFullscreen(false);
        }
      } else {
        console.warn("[Telegram] requestFullscreen 不可用");
        setError("当前环境不支持全屏");
      }

      viewport.expand?.();
    };

    run();
  }, []);

  const requestFullscreenManually = async () => {
    if (viewport.requestFullscreen.isAvailable()) {
      try {
        await viewport.requestFullscreen();
        setIsFullscreen(true);
        setError(null);
      } catch (err: any) {
        setError("用户触发全屏失败");
        setIsFullscreen(false);
      }
    }
  };

  return {
    isFullscreen,
    error,
    requestFullscreenManually,
  };
}

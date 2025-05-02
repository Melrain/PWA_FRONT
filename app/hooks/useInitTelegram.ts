// app/hooks/useInitTelegram.ts
"use client";

import { useEffect } from "react";
import {
  init,
  miniApp,
  setMiniAppBackgroundColor,
  setMiniAppHeaderColor,
  swipeBehavior,
  viewport,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";
import { useAppEnv } from "../store/useAppEnv";

export function useInitTelegram() {
  const { setIsTelegram } = useAppEnv();

  useEffect(() => {
    let params;
    try {
      params = retrieveLaunchParams(); // 尝试从 URL 或其他来源读取
    } catch (err) {
      console.warn("[Telegram] 非 Telegram 环境，跳过初始化:", err);
      return;
    }

    if (!params) {
      console.warn("[Telegram] 未检测到有效启动参数，跳过初始化");
      setIsTelegram(false);
      return;
    }

    setIsTelegram(true);

    const runInit = async () => {
      // ✅ 初始化 SDK
      init();

      // ✅ MiniApp 挂载
      if (miniApp.mount.isAvailable() && !miniApp.isMounting()) {
        await miniApp.mount();
      }

      // ✅ 设置背景与头部颜色
      if (miniApp.isMounted()) {
        setMiniAppBackgroundColor("#000000");
        setMiniAppHeaderColor("#000000");
      }

      // ✅ 设置滑动行为
      if (swipeBehavior.mount.isAvailable()) {
        swipeBehavior.mount();
      }
      if (swipeBehavior.disableVertical.isAvailable()) {
        swipeBehavior.disableVertical();
      }

      // ✅ 视口挂载 + 请求全屏
      if (viewport.mount.isAvailable() && !viewport.isMounting()) {
        await viewport.mount();
        viewport.requestFullscreen?.ifAvailable?.(); // 更安全的写法
        viewport.expand?.();
      }
    };

    runInit();
  }, []);
}

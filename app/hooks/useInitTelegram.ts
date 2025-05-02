// app/hooks/useInitTelegram.ts
import { useEffect } from "react";
import {
  init,
  miniApp,
  setMiniAppBackgroundColor,
  setMiniAppHeaderColor,
  swipeBehavior,
  viewport,
} from "@telegram-apps/sdk-react";

export function useInitTelegram() {
  useEffect(() => {
    const initTelegram = async () => {
      init();

      if (miniApp.mount.isAvailable() && !miniApp.isMounting()) {
        await miniApp.mount();
      }

      if (miniApp.isMounted()) {
        setMiniAppBackgroundColor("#000000");
        setMiniAppHeaderColor("#000000");
      }

      if (swipeBehavior.mount.isAvailable()) {
        swipeBehavior.mount();
      }

      if (swipeBehavior.disableVertical.isAvailable()) {
        swipeBehavior.disableVertical();
      }

      if (viewport.mount.isAvailable() && !viewport.isMounting()) {
        await viewport.mount();
      }

      // viewport
      if (viewport.mount.isAvailable() && !viewport.isMounting()) {
        await viewport.mount();
        viewport.requestFullscreen();
        viewport.expand();
      }
    };

    initTelegram();
  }, []);
}

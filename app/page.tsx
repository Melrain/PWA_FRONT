"use client";
import React from "react";
import SafeAreaWrapper from "./components/SafeAreaWrapper";
import { useTelegramFullscreen } from "./hooks/useTelegramFullScreen";

const page = () => {
  const { isFullscreen, error, requestFullscreenManually } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramFullscreen();
  return (
    <SafeAreaWrapper>
      {!isFullscreen && (
        <button
          onClick={requestFullscreenManually}
          className="fixed top-4 right-4 z-50 rounded bg-black/70 px-4 py-2 text-white">
          点击进入全屏
        </button>
      )}

      {error && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* 游戏主内容 */}
    </SafeAreaWrapper>
  );
};

export default page;

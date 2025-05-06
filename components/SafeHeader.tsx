"use client";
import React from "react";
import { useAppEnv } from "../store/useAppEnv";
import { useTelegramUserStore } from "../store/useTelegramUserStore";

export function SafeHeader() {
  const { isTelegram } = useAppEnv();
  const { isFullScreen } = useTelegramUserStore();
  return (
    <header
      className={`${isTelegram && isFullScreen ? "pt-28" : "pt-6"} text-white`}>
      Header
    </header>
  );
}

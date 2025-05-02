"use client";
import React from "react";
import { useAppEnv } from "../store/useAppEnv";
import { useTelegramUserStore } from "../store/useTelegramUserStore";

export function SafeHeader() {
  const { isTelegram } = useAppEnv();
  const { user } = useTelegramUserStore();
  return (
    <header className={`${isTelegram ? "pt-28" : "pt-6"} `}>
      {isTelegram ? `这是telegram环境:${user?.id}` : "非telegram 环境"}
    </header>
  );
}

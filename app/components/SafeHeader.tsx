"use client";
import React from "react";
import { useAppEnv } from "../store/useAppEnv";

export function SafeHeader() {
  const { isTelegram } = useAppEnv();
  return (
    <header className={`${isTelegram ? "pt-28" : "pt-6"} `}>
      {isTelegram ? "这是telegram环境" : "非telegram 环境"}
    </header>
  );
}

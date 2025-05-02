"use client";
import React from "react";
import { useAppEnv } from "../store/useAppEnv";

export function SafeHeader() {
  const { isTelegram } = useAppEnv();
  return <header className={`${isTelegram ? "pt-24" : ""}`}>Header</header>;
}

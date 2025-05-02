"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";

export function SafeHeader({ children }: PropsWithChildren) {
  const [safeTop, setSafeTop] = useState(0);

  useEffect(() => {
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const fallback = isiOS ? 32 : 16;
    const envTop = getComputedStyle(document.documentElement).getPropertyValue(
      "env(safe-area-inset-top)"
    );
    const parsed = parseInt(envTop || "0", 10);
    setSafeTop(isNaN(parsed) ? fallback : parsed);
  }, []);

  return <header style={{ paddingTop: safeTop }}>{children}</header>;
}

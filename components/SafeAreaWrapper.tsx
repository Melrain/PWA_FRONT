"use client";

import { PropsWithChildren } from "react";

export default function SafeAreaWrapper({ children }: PropsWithChildren) {
  return <div className="safe-area-wrapper">{children}</div>;
}

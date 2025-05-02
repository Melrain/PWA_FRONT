import React, { PropsWithChildren } from "react";

export function SafeHeader({ children }: PropsWithChildren) {
  return <header className="safe-area-header">{children}</header>;
}

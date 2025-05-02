import { PropsWithChildren } from "react";

export function SafeFooter({ children }: PropsWithChildren) {
  return <footer className="safe-area-footer">{children}</footer>;
}

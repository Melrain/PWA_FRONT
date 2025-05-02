"use client";

import { SafeFooter } from "./SafeFooter";
import { SafeHeader } from "./SafeHeader";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <SafeHeader>
        <div className="text-xl font-bold px-4">游戏标题或导航栏</div>
      </SafeHeader>

      <main className="flex-1">{children}</main>

      <SafeFooter>
        <div className="px-4 pb-4">
          {/* 比如：操作按钮、工具栏等 */}
          <button className="w-full rounded bg-white text-black py-2">
            返回大厅
          </button>
        </div>
      </SafeFooter>
    </div>
  );
}

import React from "react";
import { LayoutShell } from "./components/LayoutShell";

const page = () => {
  return (
    <LayoutShell>
      <div className="p-4">
        {/* 页面主体内容 */}
        <p>这里是游戏主体内容</p>
      </div>
    </LayoutShell>
  );
};

export default page;

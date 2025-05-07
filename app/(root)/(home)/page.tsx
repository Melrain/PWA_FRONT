import { LayoutShell } from "@/components/LayoutShell";
import MyProfile from "@/components/profile/MyProfile";

import React from "react";

const page = () => {
  return (
    <LayoutShell>
      <div className="flex  w-full md:p-10 ">
        {/* Header Profile */}
        <div className="flex w-full">
          <MyProfile />
        </div>
      </div>
    </LayoutShell>
  );
};

export default page;

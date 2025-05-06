"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MyProfile = () => {
  return (
    <div className="flex max-md:gap-2 md:gap-10 flex-row w-full items-center">
      <Avatar className=" max-md:size-30 md:size-60">
        <AvatarImage src="./images/avatar2.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-white">
        <p>1</p>
      </div>
    </div>
  );
};

export default MyProfile;

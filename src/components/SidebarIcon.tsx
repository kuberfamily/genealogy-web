import React from "react";
import { sidebarIconProps } from "../../common.types";
import ShowTitleOnHover from "./ShowTitleOnHover";
import Link from "next/link";

const SidebarIcon = ({
  Icon,
  title,
  isActive,
  href,
  onClick,
}: sidebarIconProps) => {
  return (
    <Link
      href={href}
      className="flex aspect-square w-[2.5rem] justify-center items-center p-2 hover:bg-[#5252523b] rounded-md relative group text-2xl cursor-pointer"
      onClick={onClick}
    >
      {isActive && (
        <span className="flex flex-1 absolute left-[-.75rem] top-0 h-full w-[.35rem] bg-blue-600 rounded-r-md "></span>
      )}
      <Icon />
      <ShowTitleOnHover text={title} position="left-[120%]" />
    </Link>
  );
};

export default SidebarIcon;

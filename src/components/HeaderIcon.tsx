import React, { ReactNode } from "react";
import ShowTitleOnHover from "./ShowTitleOnHover";
import { headerIconProps } from "../../common.types";

const HeaderIcon = ({ Icon, count, title }: headerIconProps) => {
  return (
    <div className="flex justify-center items-center p-2 bg-[#E4E6EB] rounded-full text-2xl cursor-pointer relative group">
      <Icon />
      {count && (
        <span className="absolute p-[5px] rounded-[50%] bg-red-600 text-white font-bold flex justify-center items-center w-[20px] h-[20px] text-[12px] top-[-5px] right-[-5px] ">
          {count}
        </span>
      )}
      <ShowTitleOnHover text={title} position="top-[110%]" />
    </div>
  );
};

export default HeaderIcon;

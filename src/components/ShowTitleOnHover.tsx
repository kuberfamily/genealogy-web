import React from "react";
import { showtitleOnhoverProps } from "../../common.types";

const ShowTitleOnHover = ({ text, position }: showtitleOnhoverProps) => {
  return (
    <span
      className={`hidden group-hover:flex absolute justify-center items-center p-2 bg-[#2b2b2b9d] text-white rounded-md text-sm ${position}`}
    >
      {text}
    </span>
  );
};

export default ShowTitleOnHover;

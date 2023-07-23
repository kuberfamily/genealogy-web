"use client";
import React, { useEffect, useState } from "react";
import SidebarIcon from "./SidebarIcon";
import { NavLinks } from "@/constants";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<Number | boolean>(false);

  useEffect(() => {
    const linkIndex = NavLinks.findIndex(
      (link) => link.href === window.location.pathname
    );

    setActiveLink(linkIndex);
    console.log(linkIndex);
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };
  return (
    <nav className="flex flex-col justify-start p-3 border-r border-[#0e05052f] gap-4">
      {NavLinks.map((link, index) => (
        <SidebarIcon
          key={index}
          Icon={link.icon}
          title={link.title}
          isActive={activeLink === index}
          href={link.href}
          onClick={() => handleLinkClick(index)}
        />
      ))}
    </nav>
  );
};

export default Sidebar;

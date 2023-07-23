"use client";
import { HiBell, HiChat, HiSearch, HiUserCircle } from "react-icons/hi";
import HeaderIcon from "./HeaderIcon";
import img from "../../public/download.jpeg";
import Image from "next/image";
import ShowTitleOnHover from "./ShowTitleOnHover";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push("/search");
  };
  return (
    <header className="flex justify-between items-center p-3 bg-white fixed top-0 left-0 flex-1 w-full ">
      <Link
        href="/"
        className="left text-2xl font-semibold pl-4 cursor-pointer text-[#03325e]"
      >
        Kuber's Genealogy
      </Link>
      <label
        htmlFor="search"
        className="middle flex flex-[.5] justify-center items-center space-x-4 bg-[#E4E6EB] rounded-full px-4 py-2"
      >
        <HiSearch fontSize={"22px"} />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-transparent flex flex-1 outline-none "
          onClick={handleClick}
        />
      </label>
      <div className="right flex justify-center items-center gap-3 pr-2">
        <HeaderIcon Icon={HiChat} count={10} title="Messenger" />
        <HeaderIcon Icon={HiBell} count={20} title="Notifications" />
        <div className="account_icon cursor-pointer relative group">
          {img ? (
            <Image
              src={img}
              alt="profile"
              className="w-[2.5rem] rounded-[50%] aspect-square border border-slate-800 "
            />
          ) : (
            <HeaderIcon Icon={HiUserCircle} title="Account" />
          )}
          {img && (
            <ShowTitleOnHover
              text="Account"
              position="top-[110%] left-[-50%]"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

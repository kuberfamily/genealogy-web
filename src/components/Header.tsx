import { HiBell, HiChat, HiSearch, HiUserCircle } from "react-icons/hi";
import HeaderIcon from "./HeaderIcon";
import img from "../../public/download.jpeg";
import Image from "next/image";
import ShowTitleOnHover from "./ShowTitleOnHover";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "../../lib/sessions";
import SearchBox from "./SearchBox";

const Header = async () => {
  const session = await getCurrentUser();
  return (
    <header className="flex justify-between items-center p-3 bg-white fixed top-0 left-0 flex-1 w-full ">
      <Link
        href="/"
        className="left text-2xl font-semibold pl-4 cursor-pointer text-[#03325e]"
      >
        Kuber&apos;s Genealogy
      </Link>
      <div className="middle">
        <SearchBox />
      </div>
      <div className="right flex justify-center items-center gap-3 pr-2">
        <HeaderIcon Icon={HiChat} count={10} title="Messenger" />
        <HeaderIcon Icon={HiBell} count={20} title="Notifications" />
        {session?.user ? (
          <div className="account_icon cursor-pointer relative group">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
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
        ) : (
          <AuthProviders />
        )}
      </div>
    </header>
  );
};

export default Header;

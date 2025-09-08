import { HiCubeTransparent } from "react-icons/hi";
import { HiLanguage } from "react-icons/hi2";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBrandMessenger, TbFriends } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="flex w-[260px] flex-col gap-4">
        <div
          className="flex w-full flex-col gap-6 rounded-md bg-white px-[30px] py-[20px]"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          <Link
            to="/"
            className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
          >
            <IoNewspaperOutline className="text-[20px]" />
            New Feeds
          </Link>
          <Link
            to="/messages"
            className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
          >
            <TbBrandMessenger className="text-[20px]" />
            Messenger
          </Link>
          <Link
            to="/friends"
            className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
          >
            <TbFriends className="text-[20px]" />
            Friends
          </Link>
          <Link
            to="/groups"
            className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
          >
            <HiCubeTransparent className="text-[20px]" />
            Groups
          </Link>
        </div>

        <div
          className="w-full rounded-md bg-white px-[30px] py-[20px]"
          style={{
            boxShadow: "0px 2px 4px 0px #A5A3AE4D",
          }}
        >
          <div className="text-secondary mb-[15px] text-[11px] font-normal">
            Settings
          </div>
          <div className="flex flex-col gap-6">
            <Link
              to="/settings/account"
              className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
            >
              <IoSettingsOutline className="text-[20px]" />
              Account
            </Link>
            <Link
              to="/settings/languages"
              className="text-secondary hover:text-primary flex items-center gap-2 text-[15px] font-normal transition-all duration-300"
            >
              <HiLanguage className="text-[20px]" />
              Languages
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

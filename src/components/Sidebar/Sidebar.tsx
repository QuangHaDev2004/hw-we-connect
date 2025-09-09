import { HiCubeTransparent } from "react-icons/hi";
import { HiLanguage } from "react-icons/hi2";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBrandMessenger, TbFriends } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { closeSidebar } from "../../redux/slices/sidebarSlice";

export const Sidebar = () => {
  const isOpenSidebar = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`w-[260px] flex-col gap-4 lg:flex ${isOpenSidebar ? "fixed top-0 left-0 z-[999] h-[100vh] bg-white p-4" : "hidden"}`}
      >
        <div
          className="mb-[24px] flex w-full flex-col gap-6 rounded-md bg-white px-[30px] py-[20px] lg:mb-0"
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
      {/* Overlay */}
      <div
        onClick={() => dispatch(closeSidebar())}
        className={`${isOpenSidebar ? "fixed inset-0 z-[998] block bg-[#000000c2]" : "hidden"}`}
      ></div>
    </>
  );
};

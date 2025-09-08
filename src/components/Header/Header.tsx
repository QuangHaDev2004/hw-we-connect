import { FaMagnifyingGlass, FaRegBell } from "react-icons/fa6";
import { useUserInfo } from "../../hooks/useUserInfo";
import { useLogout } from "../../hooks/useLogout";

export const Header = () => {
  const userInfo = useUserInfo();
  const logout = useLogout();

  return (
    <div
      className="flex h-[62px] items-center gap-6 bg-white px-6 py-3.5"
      style={{
        boxShadow: "0px 2px 4px 0px #A5A3AE4D",
      }}
    >
      <div className="h-[34px] w-[34px]">
        <img
          src="/assets/images/account-logo.svg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <form action="" className="flex h-[38px] flex-1 items-center gap-[10px]">
        <FaMagnifyingGlass className="text-secondary text-xl" />
        <input type="text" name="keyword" id="" placeholder="Search" />
      </form>
      <div className="flex items-center gap-3">
        <div className="relative h-[26px] w-[26px]">
          <FaRegBell className="absolute top-1/2 left-1/2 -translate-1/2 text-xl" />
          <span className="absolute top-[-6px] right-[-5px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EA5455] text-[13px] font-medium text-white">
            6
          </span>
        </div>
        <div className="dropdown dropdown-end">
          <div
            className="bg-secondary flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white uppercase"
            tabIndex={0}
          >
            {userInfo.fullName?.[0]}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu text-secondary z-1 w-[120px] rounded-md bg-white p-2 text-[15px] font-medium shadow-sm"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

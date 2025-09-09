import { useUserInfo } from "../../hooks/useUserInfo";

export const Avatar = () => {
  const userInfo = useUserInfo();

  return (
    <>
      <div
        className="bg-secondary flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white uppercase"
        tabIndex={0}
      >
        {userInfo.fullName?.[0]}
      </div>
    </>
  );
};

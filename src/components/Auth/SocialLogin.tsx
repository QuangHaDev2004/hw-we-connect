import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SocialLogin = () => {
  return (
    <>
      <div className="mt-[26px] flex items-center justify-center gap-[10px]">
        <Link
          to={""}
          target="_blank"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#4267B2]/16"
        >
          <FaFacebookF className="text-[#4267B2]" />
        </Link>
        <Link
          to={""}
          target="_blank"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#1DA1F2]/16"
        >
          <FaTwitter className="text-[#1DA1F2]" />
        </Link>
        <Link
          to={""}
          target="_blank"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#DB4437]/16"
        >
          <FaGoogle className="text-[#DB4437]" />
        </Link>
      </div>
    </>
  );
};

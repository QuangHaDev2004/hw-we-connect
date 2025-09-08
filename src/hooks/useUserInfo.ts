import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const useUserInfo = () => {
  return useSelector((state: RootState) => state.auth.userInfo);
};
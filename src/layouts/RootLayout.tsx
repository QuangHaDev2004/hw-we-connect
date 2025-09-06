import { Navigate, Outlet } from "react-router-dom";
import { useGetAuthUserQuery } from "../services/rootApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../redux/slices/authSlice";
import { useEffect } from "react";

export const RootLayout = () => {
  const response = useGetAuthUserQuery();
  const dispatch = useDispatch();

  console.log(response);

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(saveUserInfo(response.data));
    }
  }, [dispatch, response.data, response.isSuccess]);

  if ((response.error as FetchBaseQueryError)?.status === 401) {
    return <Navigate to="/login" />;
  }

  if (response.isLoading) {
    return <p>Loading...</p>;
  }

  if (!response?.data?._id) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Header</h1>
      <Outlet /> {/* render ra các route con (children). */}
      <div>Footer</div>
    </>
  );
};

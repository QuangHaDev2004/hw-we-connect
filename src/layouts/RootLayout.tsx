import { Navigate, Outlet } from "react-router-dom";
import { useGetAuthUserQuery } from "../services/rootApi";

export const RootLayout = () => {
  const response = useGetAuthUserQuery();
  if (!response?.data?._id) {
    return <Navigate to="/login" />;
  }

  if (response.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Header</h1>
      <Outlet /> {/* render ra các route con (children). */}
      <div>Footer</div>
    </>
  );
};

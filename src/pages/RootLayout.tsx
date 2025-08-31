import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet /> {/* render ra các route con (children). */}
      <div>Footer</div>
    </>
  );
};

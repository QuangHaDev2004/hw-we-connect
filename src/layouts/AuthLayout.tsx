import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <div className="min-h-[100vh] py-[90px]">
        <div
          className="mx-auto w-[95%] rounded-[6px] bg-white p-[32px] sm:w-[450px]"
          style={{
            boxShadow: "0px 4px 18px 0px #4B465C1A",
          }}
        >
          <img
            src="/assets/images/account-logo.svg"
            alt="Logo"
            className="mx-auto mb-8 h-[55px] w-[58px] object-cover"
          />
          <Suspense fallback={<p>Loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

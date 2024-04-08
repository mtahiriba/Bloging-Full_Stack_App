import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AsideBar, Menu } from "../../components";

const Main = () => {
  // check if user is logged in
  useEffect(() => {
    const userToken = localStorage.getItem("UserToken");
    if (!userToken) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Aside Bar Component */}
      <AsideBar />

      {/* Right Main Content */}
      <div className="w-[100%]">
        <Menu />

        {/* Nested routing */}
        <div className="h-[87%]">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;

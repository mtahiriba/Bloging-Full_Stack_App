import React from "react";
import NavItems from "../static/NavItems";
import { Link } from "react-router-dom";

const AsideBar = () => {
  return (
    <div className="bg-green-800 w-96 h-screen hidden md:flex flex-col gap-20 px-10 py-10 items-center rounded-tr-2xl">
      <span className="text-white text-3xl">TECHNOHOLICS</span>
      <div className="flex flex-col gap-5 w-full">
        {NavItems?.map((item) => {
          return (
            <Link key={item.id} to={item.path} className="w-full">
              <button className="text-white bg-green-950 border shadow-md rounded-md py-2 px-5 w-full">
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AsideBar;

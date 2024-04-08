import React, { useState } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../assets/icons";
import NavItems from "../static/NavItems";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("UserToken");
    navigate("/login");
  };

  const handleTabClick = (name) => {
    if(name === "Dashboard"){
      navigate('/dashboard');
    } else if(name === "Home"){
      navigate('/')
    }

    setIsOpenMenu(false);
  };

  return (
    <div className="relative h-[100px] sm:h-[13%] px-10 flex items-center justify-between bg-white shadow-lg">
      <span className="text-2xl sm:text-3xl font-bold">BLOGGING APP</span>
      <div className="hidden sm:block">
        <Button type={"danger"} handler={handleLogout}>
          Log out
        </Button>
      </div>
      <div className="sm:hidden">
        <MenuIcon handler={() => setIsOpenMenu(!isOpenMenu)} />
      </div>
      {isOpenMenu && (
        <div className="sm:hidden bg-green-800 absolute w-full left-0 top-[100px] z-50 flex flex-col gap-5 px-5 py-10">
          {NavItems?.map((item) => {
            return (
                <button key={item.id} onClick={() => handleTabClick(item.title)} className="text-white bg-green-950 border shadow-md rounded-md py-2 px-5 w-full">
                  {item.title}
                </button>
            );
          })}
          <Button type={"danger"} handler={handleLogout}>
          Log out
        </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;

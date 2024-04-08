import React from "react";
import Button from "./Button";
import { useNavigate, link, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logOutClickHandler = () => {
    localStorage.removeItem("UserToken");
    navigate("/login");
  };

  return (
    <div className="w-full bg-gray-200 px-16 py-5 flex justify-between shadow-md">
      <Link>
        <span className="text-lg font-semibold flex justify-center items-center">
          HUBE Private Limited
        </span>
      </Link>
      <Button handler={logOutClickHandler}>Log out</Button>
    </div>
  );
};

export default Navbar;

import React from "react";

const Button = ({handler, width, type="success", disabled=false, children}) => {
  return (
    <button 
      className={`${type.toLocaleLowerCase() === "success" && "bg-green-800"} 
        ${type.toLocaleLowerCase() === "danger" && "bg-red-500"}
        ${type.toLocaleLowerCase() === "primary" && "bg-blue-500"}
        text-white border shadow-md rounded-md py-2 px-5 ${width} disabled:cursor-not-allowed disabled:bg-gray-400`}
      onClick={handler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

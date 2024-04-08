import React, { useState } from "react";
import { InputField } from "./index";
import { OpenEyeIcon, CloseEyeIcon } from "../assets/icons";

const PasswordField = ({ name, placeholder, value, setValue, validation }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className=''>
      <div className="relative">
        <InputField
          type={isPasswordShow ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
        />
        <div className="absolute right-0 top-0 h-full w-14 flex justify-end items-center px-3">
          <div
            className="cursor-pointer"
            onClick={() => setIsPasswordShow(!isPasswordShow)}
          >
            {isPasswordShow ? <OpenEyeIcon /> : <CloseEyeIcon />}
          </div>
        </div>
      </div>
      <p className="text-red-500 text-xs ml-3">{validation}</p>
    </div>
  );
};

export default PasswordField;

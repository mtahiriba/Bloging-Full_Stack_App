import React from "react";

const TextArea = ({ placeholder, name, value, setValue, type = "text", validation, rows=4 }) => {
  return (
    <div className="w-full ">
      <textarea
        rows={rows}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className="w-full p-2 rounded-md border-2 border-slate-300"
      />
      <p className="text-red-500 text-xs ml-3">{validation}</p>
    </div>
  );
};

export default TextArea;

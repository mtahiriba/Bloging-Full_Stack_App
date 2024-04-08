import React from "react";

const ModelLayout = ({ isOpen, onClose, title, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-end sm:items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-90"
          onClick={onClose}
        ></div>
        <div className="bg-white absolute rounded-t-lg sm:rounded-lg w-full sm:w-96 flex flex-col pb-6 sm:pb-0 sm:pt-0  gap-8">
          <div className="flex flex-col overflow-y-auto ">
            <div className="bg-green-800 flex flex-col justify-center items-center gap-12 sm:pt-12 pb-2 rounded-t-md relative">
              <div className="absolute top-5 right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={onClose}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div
                className="flex sm:hidden justify-center items-center"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  height="4"
                  viewBox="0 0 69 4"
                  fill="none"
                >
                  <path
                    d="M2.5 2H66.5"
                    stroke="#C7C8CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-2xl text-white font-semibold">{title}</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default ModelLayout;
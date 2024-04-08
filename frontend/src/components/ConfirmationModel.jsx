import React from "react";
import { Button } from "./";
import { DeleteIcon } from "../assets/icons";

const ConfirmationModel = ({ isOpen, onClose, setDeleteResponse }) => {
  const clickHandler = (response) => {
    setDeleteResponse(response);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-end sm:items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-90"
          onClick={onClose}
        ></div>
        <div className="bg-white absolute rounded-t-lg sm:rounded-lg min-h-52 w-full sm:w-96 flex flex-col pb-6 sm:pb-0 sm:pt-0  gap-8">
          <div className="flex flex-col mb-10">
            <div className="flex justify-end px-5 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={onClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-5 px-7 py-10 justify-center">
              <div className="flex justify-center">
                <DeleteIcon />
              </div>
              <span className=" text-center font-bold text-lg">
                Are you sure?
              </span>
              <p className="text-center">
                Do you really want to delete this Post? This process can't
                be undone.
              </p>
            </div>
            <div className="flex gap-10 justify-center">
              <Button
                type="primary"
                handler={() => clickHandler(false)}
              >
                Cancel
              </Button>
              <Button type="danger" handler={() => clickHandler(true)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmationModel;

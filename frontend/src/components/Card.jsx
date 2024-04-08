import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConfirmationModel, ModelLayout, BlogForm } from "./";
import { deleteBlog } from "../Network/blog.network";
import { toast } from "react-toastify";
import { DotedMenu } from "../assets/icons";

const default_image =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";

const Card = ({ blog, isEdit = false, rerender, setRerender }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [deleteResponse, setDeleteResponse] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);

  const handleOptionChange = () => {
    setIsOption(!isOption);
  };

  const handleDeleteClick = () => {
    setIsDelete(true);
  };

  const handleEditClick = () => {
    setIsEditPost(true);
  };

  // Delete the blog
  useEffect(() => {
    if (deleteResponse) {
      deleteBlog(blog._id, localStorage.getItem("UserToken"))
        .then((res) => {
          toast.success(res.data.message);
          setDeleteResponse(false);
          setRerender(!rerender);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setDeleteResponse(false);
        });
      setIsDelete(false);
    }
  }, [deleteResponse]);

  return (
    <>
      <div className="relative w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full h-48">
          <img
            className="rounded-t-lg object-cover w-full h-48"
            src={`${
              blog.image
                ? `data:image/png;base64, ${blog.image}`
                : default_image
            } `}
            alt={blog.title}
          />
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog.content.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <Link to={`/blogs/${blog._id}`}>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </Link>
        </div>

        {isEdit && (
          <span className="absolute top-2 right-2">
            <div className="relative">
              <DotedMenu handler={handleOptionChange} />
              {isOption && (
                <div className="bg-white border shadow-md rounded-md absolute -left-20 top-0 py-1 px-3">
                  <ul>
                    <li
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={handleEditClick}
                    >
                      Edit
                    </li>
                    <li
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </span>
        )}
      </div>

      {/* Modal for Edit Post */}
      <ModelLayout
        isOpen={isEditPost}
        onClose={() => setIsEditPost(false)}
        title={"Edit Blog"}
      >
        <BlogForm
          modelClose={() => setIsEditPost(false)}
          isEdit={isEditPost}
          blog={blog}
          isRerenderDashboard={rerender}
          setIsRerenderDashboard={setRerender}
        />
      </ModelLayout>

      {/* Model for getting confirmation for delete Item */}
      <ConfirmationModel
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
        setDeleteResponse={setDeleteResponse}
      />
    </>
  );
};

export default Card;

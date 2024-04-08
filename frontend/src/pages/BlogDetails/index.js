import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../Network/blog.network";
import { toast } from "react-toastify";
import { UserRatings } from "../../components";
import { BackArrowIcon } from "../../assets/icons";

const default_image =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";

const BlogDetails = () => {
  let { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [isRatingChanged, setIsRatingChanged] = useState(false);

  // get blog details
  useEffect(() => {
    getBlog(blogId)
      .then((res) => {
        toast.success(res.data.message);
        setBlog(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  }, [blogId, isRatingChanged]);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <>
      <div className="px-10 pt-5 h-full flex flex-col gap-5 overflow-auto">
        <div className="flex justify-between items-center">
          <BackArrowIcon handler={handleBackClick} />
        </div>
        <div className=" mb-10 border bg-white rounded-lg flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-[40%]">
            <img
              src={`${
                blog.image
                  ? `data:image/png;base64, ${blog.image}`
                  : default_image
              } `}
              className="rounded-lg shadow-sm"
            />
          </div>
          <div className="w-full sm:w-[60%] py-5 flex flex-col gap-5 pr-5">
            <span className="text-3xl">{blog.title}</span>
            <p>{blog.content}</p>
            <div>
              <UserRatings
                id={blog._id}
                isRatingChanged={isRatingChanged}
                setIsRatingChanged={setIsRatingChanged}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

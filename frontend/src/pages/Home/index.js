import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddIcon } from "../../assets/icons";
import { getBlogsByUser } from "../../Network/blog.network";
import { Button, ModelLayout, BlogForm, Card } from "../../components";

const Home = () => {
  const [isAddBlog, setIsAddBlog] = useState(false);
  const [isRerenderDashboard, setIsRerenderDashboard] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogsByUser(localStorage.getItem("UserToken"))
      .then((res) => {
        setBlogs(res.data.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  }, [isRerenderDashboard]);

  return (
    <>
      <div className="h-[100%] flex flex-col py-5 gap-5 overflow-auto">
        <div className="h-[12%] px-10 flex items-center">
          <Button handler={() => setIsAddBlog(true)} width={"w-60"}>
            <div className="flex gap-5 px-2">
              <AddIcon />
              <span>Add New Blog</span>
            </div>
          </Button>
        </div>

        <div className="flex flex-wrap px-7">
          {blogs?.map((blog) => {
            return (
              <div
                key={blog._id}
                className="w-full sm:w-[50%] lg:w-[33.333%] 2xl:w-[25%] flex justify-center pb-12 px-3 sm:pb-4"
              >
                <Card blog={blog} isEdit={true} rerender={isRerenderDashboard} setRerender={setIsRerenderDashboard}/>
              </div>
            );
          })}
        </div>
      </div>

      {/* Model for Add a customer */}
      <ModelLayout
        isOpen={isAddBlog}
        onClose={() => setIsAddBlog(false)}
        title={"Add New Blog"}
      >
        <BlogForm
          modelClose={() => setIsAddBlog(false)}
          isRerenderDashboard={isRerenderDashboard}
          setIsRerenderDashboard={setIsRerenderDashboard}
        />
      </ModelLayout>
    </>
  );
};

export default Home;

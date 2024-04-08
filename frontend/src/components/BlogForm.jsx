import React, { useRef } from "react";
import { Formik } from "formik";
import { InputField, Button, TextArea } from "./";
import { validateBlogForm } from "../utils/validations";
import { toast } from "react-toastify";
import { createBlog, updateBlog } from '../Network/blog.network'

const BlogForm = ({
  isEdit = false,
  blog,
  modelClose,
  isRerenderDashboard,
  setIsRerenderDashboard,
}) => {
  const initialValues = {
    title: blog?.title || "",
    description: blog?.content || "",
    image: null,
  };

  // Reference to the hidden file input
  const fileInputRef = useRef(null);

  // Function to handle file input change
  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("image", file);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validateBlogForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          if (!isEdit) {
            // Create a new blog
            createBlog(values, localStorage.getItem('UserToken')).then((res) => {
              toast.success(res.data.message);
              setIsRerenderDashboard(!isRerenderDashboard);
              modelClose();
            }).catch((err) => {
              toast.error(err.response.data.message);
              console.log(err);
            });
          } else {
            
            // update the existing blog
            updateBlog(values, blog._id, localStorage.getItem('UserToken')).then((res) => {
              toast.success(res.data.message);
              setIsRerenderDashboard(!isRerenderDashboard);
              modelClose();
            }).catch((err) => {
              toast.error(err.response.data.message);
              console.log(err);
            });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue, // Access setFieldValue from Formik
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-5">
            <InputField
              type="text"
              placeholder="Blog Title"
              name="title"
              value={values.title}
              setValue={handleChange}
              validation={
                errors.title && touched.title && errors.title
              }
            />

            <TextArea
              rows={6}
              placeholder={"Enter Blog Content"}
              name={"description"}
              value={values.description}
              setValue={handleChange}
              validation={errors.description && touched.description && errors.description}
            />

            
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, setFieldValue)}
            />

            {/* Text to trigger file input click */}
            <div>
              <span
                onClick={() => {
                  fileInputRef.current.click();
                }}
                className="text-blue-500 cursor-pointer underline"
              >
                Upload a photo
              </span>
            </div>

            <Button>
              {isEdit ? "UPDATE BLOG" : "ADD BLOG"}
            </Button>
            
          </form>
        )}
      </Formik>
    </>
  );
};

export default BlogForm;

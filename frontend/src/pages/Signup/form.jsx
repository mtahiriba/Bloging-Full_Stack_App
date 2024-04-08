// react imports
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";

// project imports
import { InputField, PasswordField, Button } from "../../components";
import { validateSignupForm } from "../../utils/validations";
import { signup } from "../../Network/auth.network";

const Form = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    retypePassword: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validateSignupForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          signup(values)
            .then((res) => {
              toast.success(res.data.message);
              navigate("/login");
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-5">
            {/* Name field */}
            <InputField
              type="text"
              placeholder="Enter Name"
              name="name"
              value={values.name}
              setValue={handleChange}
              validation={errors.name && touched.name && errors.name}
            />

            {/* Phone field */}
            <InputField
              type="number"
              placeholder="Enter Phone Number"
              name="phone"
              value={values.phone}
              setValue={handleChange}
              validation={errors.phone && touched.phone && errors.phone}
            />

            {/* Email field */}
            <InputField
              type="email"
              placeholder="email@gmail.com"
              name="email"
              value={values.email}
              setValue={handleChange}
              validation={errors.email && touched.email && errors.email}
            />

            {/* Password field */}
            <PasswordField
              name="password"
              value={values.password}
              setValue={handleChange}
              placeholder={"Enter Password"}
              validation={
                errors.password && touched.password && errors.password
              }
            />

            {/* Retype Password field */}
            <PasswordField
              name="retypePassword"
              value={values.retypePassword}
              setValue={handleChange}
              placeholder={"Retype Password"}
              validation={
                errors.retypePassword && touched.retypePassword && errors.retypePassword
              }
            />

            <Button>Sign Up</Button>

            <div className="flex justify-center text-sm font-semibold mt-3">
              <Link to={"/login"}>
                <span>
                  Already have an account{" "}
                  <span className=" underline text-blue-500">Log in</span>
                </span>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;

// react imports
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";

// project imports
import { InputField, PasswordField, Button } from "../../components";
import { validateLoginForm } from "../../utils/validations";
import { login } from "../../Network/auth.network";

const Form = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validateLoginForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          login(values).then((res) => {
            toast.success(res.data.message);
            localStorage.setItem("UserToken", res.data.token);
            navigate("/");
          }).catch((err) => {
            toast.error(err.response.data.message);
          });
          
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-5">
              <InputField
                type="text"
                placeholder="email@gmail.com"
                name="email"
                value={values.email}
                setValue={handleChange}
                validation={ errors.email && touched.email && errors.email }
              />
              
              <div>
                <PasswordField
                  name="password"
                  value={values.password}
                  setValue={handleChange}
                  placeholder={"Password"}
                  validation={ errors.password && touched.password && errors.password }
                />

                <Link>
                  <span className="text-xs ml-2">Forgot password?</span>
                </Link>
              </div>

              <Button>Login</Button>

              <div className="flex justify-center text-sm font-semibold mt-3">
                <Link to={"/register"}>
                  <span>
                    Don't have an account{" "}
                    <span className=" underline text-blue-500">Sign Up</span>
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

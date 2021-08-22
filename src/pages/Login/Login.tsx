import { Footer } from "../../components";
import React from "react";
import Input from "../../components/Input";
import { Formik, Form, Field } from "formik";

type formInputs = {
  email?: string;
  password?: string;
};

interface LoginProps {}

const bgImg = "images/bg-circle.png";
const loginImg = "svg/login.svg";
const logoImg = "svg/logo.svg";
export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="max-w-8xl w-full h-full flex flex-row justify-center items-center">
        <div className="w-2/6 p-8">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={() => console.log("sample")}
            validate={(values: formInputs) => {
              console.log("this is the values", values);
              const errors: formInputs = {};
              if (values.email === "") {
                errors.email = "Required";
              }

              if (values.password === "") {
                errors.password = "error to";
              }
              return errors;
            }}
          >
            {({
              values,
              handleChange,
              isSubmitting,
              touched,
              submitCount,
              errors,
            }) => (
              <Form className="p-16">
                <div className="flex flex-row justify-center items-center text-blueGray-800">
                  <div>
                    <img
                      src={logoImg}
                      className="h-full w-auto"
                      alt="Hexagon logo"
                    />
                  </div>
                  <div className="font-bold text-3xl text-blueGray-600">
                    Hexagon
                  </div>
                </div>
                {/* <div className="flex flex-col text-blueGray-800 my-4">
              <label className="font-medium">Email</label>
              <input
                className="p-3 rounded border border-blueGray-800"
                placeholder="Email address"
              />
            </div> */}
                <div className="flex flex-col my-4">
                  <label className="font-medium">Email</label>
                  <Field
                    className={` p-3 rounded border ${
                      errors.email && submitCount > 0
                        ? "text-red-800 border-red-800"
                        : "text-gray-800 border-blueGray-800"
                    }`}
                    name="email"
                    placeholder="Email address"
                  />
                  {errors.email && submitCount > 0 ? (
                    <div className="bg-red-100 text-red-800 my-2 p-4 rounded text-sm">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col text-blueGray-800 my-4">
                  <label className="font-medium">Password</label>
                  <Field
                    className="p-3 rounded border border-blueGray-800"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && submitCount > 0 ? (
                    <div className="bg-red-100 text-red-800 my-2 p-4 rounded text-sm">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                {/* <div className="flex flex-col text-blueGray-800 my-4">
              <label className="font-medium">Password</label>
              <input
                className="p-3 rounded border border-blueGray-800"
                placeholder="Password"
                type="password"
                autoComplete="off"
              />
            </div> */}
                <div className="flex flex-col text-blueGray-800 my-4">
                  <button className="block w-full text-white bg-blueGray-800 p-3 rounded">
                    Sample
                  </button>
                </div>
                <div className="flex flex-col text-blueGray-800 float-right">
                  <a href="http://localhost:3000">Forgot password</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-4/6 items-end">
          <div className="w-full flex flex-row items-end h-full justify-end">
            <div className="absolute right-32 top-1/4">
              <img
                src={loginImg}
                className="h-full w-auto"
                alt="Login Illustration"
              />
            </div>
            <div>
              <img
                src={bgImg}
                className="h-full w-auto"
                alt="BACKGROUND CIRCLE"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

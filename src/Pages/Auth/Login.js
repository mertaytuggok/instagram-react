import { useEffect, useRef, useState } from "react";
import Input from "Components/Input";
import Button from "Components/Button";
import Separator from "Components/Separator";
import { AiFillFacebook } from "react-icons/ai";
import { useLocation, Link, Navigate } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "Validation/LoginSchema";
import { useSelector } from "react-redux";

export const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const Images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];

  if (user) {
    return <Navigate to={location.state?.retutn_url || "/"} replace={true} />;
  }
  const submitHandle = async (values, actions) => {
    await login(values.username, values.password);
  };

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center ">
      <div className="hidden md:block w-[380px] h-[581px]  relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] ">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]  "
          ref={ref}
        >
          {Images.map((image, key) => (
            <img
              key={key}
              className="w-full h-full  absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear "
              src={image}
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="  bg-white border px-[50px] pt-10 pb-6 ">
          <a href="#" className="flex justify-center mb-8 ">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </a>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={submitHandle}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Input
                  name="username"
                  label="Phone number, username or email"
                />
                <Input type="password" name="password" label="Password" />

                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Log In
                </Button>
                <Separator />
                <a
                  href="#"
                  className=" flex justify-center mb-2.5 items-center gap-x-2 text-sm text-facebook font-semibold"
                >
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </a>
                <a
                  href="#"
                  className=" text-xs flex items-center text-link justify-center"
                >
                  Forgot password?
                </a>
              </Form>
            )}
          </Formik>
        </div>

        <div className=" bg-white border p-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-semibold text-brand">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

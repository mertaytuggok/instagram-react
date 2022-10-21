import Input from "Components/Input";
import Button from "Components/Button";
import Separator from "Components/Separator";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "Validation/LoginSchema";

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandle = async (values, actions) => {
    const response = await login(values.username, values.password);

    if (response) {
      navigate(location.state?.retutn_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="  bg-white border px-[50px] pt-10 pb-6 ">
        <a href="#" className="flex justify-center mb-4 ">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </a>
        <p>Sign up to see photos and videos from your firends.</p>
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
              <Input name="username" label="Phone number, username or email" />
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
        <a href="#" className="font-semibold text-brand">
          Sign up
        </a>
      </div>
    </div>
  );
};

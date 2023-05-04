import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container mx-auto w-3/4 md:w-2/5 p-3 md:p-8 rounded-lg shadow-lg bg-slate-200">
      <h2 className="text-2xl text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" color="success" value="Your name" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" color="success" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="123456"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Login</Button>
        <p className="text-center">
          Are You First in FoodHub?{" "}
          <Link to="/register" className="font-bold">
            Register
          </Link>
        </p>
        <p className="text-center text-lg text-red-600">{error && error}</p>
      </form>
      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;

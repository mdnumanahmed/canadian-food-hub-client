import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const { user, createUser, updateUserData } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log(name, photo, email, password, confirmPassword);

    if(email.length === 0){
      setError('Email Field is required!')
      return;
    }

    if(password.length < 6){
      setError('Password length should be more than six characters')
      return
    }

    if (password !== confirmPassword) {
      setError("Both password not matched");
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(createdUser, name, photo)
        .then(()=>{
          console.log(displayName, photoUrl);
        })
        .catch(error => {
          console.log(error.message);
        })
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto w-3/4 md:w-2/5 p-3 md:p-8 rounded-lg shadow-lg bg-slate-200 mt-8">
      <h2 className="text-2xl text-center">Please Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            placeholder="Your Name"
            name="name"
            type="text"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoUrl" value="Your photoUrl" />
          </div>
          <TextInput
            id="photoUrl"
            placeholder="Your photoUrl"
            name="photoUrl"
            type="text"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
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
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="123456"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="confirmPassword"
              value="Confirm Password"
            />
          </div>
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="123456"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the 
            <Link
              to="/terms"
              className="ml-1 text-blue-600 hover:underline dark:text-blue-500"
            >
                terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register</Button>
        <p className="text-center">Already Have an Account? <Link to='/login' className="font-bold">Login</Link></p>
        <p>{error && error}</p>
      </form>
    </div>
  );
};

export default Register;

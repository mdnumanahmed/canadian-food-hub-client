import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    
    const [error, setError] = useState('')
    
    const {user, createUser} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const photo = form.photoUrl.value 
        const email = form.email.value 
        const password = form.password.value 
        const confirmPassword = form.confirmPassword.value 

        console.log(name, photo, email, password, confirmPassword);

        
        if(password !== confirmPassword){
            setError('Both password not matched')
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user 
            console.log(createdUser);
        })
        .catch(error => {
            setError(error.message)
        })
    }

  return (
    <div className="container mx-auto w-3/4 md:w-2/5 p-3 md:p-8 rounded-lg shadow-lg bg-slate-200">
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
            color={user ? 'success' : 'failure'}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoUrl" color="success" value="Your photoUrl" />
          </div>
          <TextInput
            id="photoUrl"
            placeholder="Your photoUrl"
            name="photoUrl"
            type="text"
            required={true}
            color="success"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" color="failure" value="Your name" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required={true}
            color="failure"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" color="failure" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="123456"
            required={true}
            color="failure"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="confirmPassword"
              color="failure"
              value="Confirm Password"
            />
          </div>
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="123456"
            required={true}
            color="failure"
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
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Register;

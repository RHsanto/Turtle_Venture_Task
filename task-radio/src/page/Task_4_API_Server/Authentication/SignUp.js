import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImGoogle } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './all.css'
const SignUp = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, registerUser, error, isLoading,setError,signInUsingGoogle } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/';

// google authentication

const handleGoogle=(e)=>{
  signInUsingGoogle()
  .then(result=>{
   navigate( redirect_uri);
   console.log(result);
     })
}
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpSubmit = (e) => {
    registerUser(name, email, password);
    e.preventDefault();
  
  };
 
  return (
    <div className='sign-up'>
       <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
         <form onSubmit={handleSignUpSubmit}>
         
         <div class="form-floating mb-3">
            <input type="text" onBlur={handleNameChange} {...register("name")} class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Enter Your Name</label>
        </div>
         <div class="form-floating mb-3">
            <input type="email" onBlur={handleEmailChange} {...register("email")} class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
         <div class="form-floating">
           <input type="password" onBlur={handlePasswordChange} {...register("password")} class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Password</label>
         </div>
         <button type='submit'>Sign in</button>
         </form>

         <button onClick={handleGoogle} className="bg-success "><ImGoogle className='fs-5'/> Sign-in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
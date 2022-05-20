import React, { useState } from 'react';
import { ImGoogle } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './all.css'
const SignIN = () => {
  const{signInUsingGoogle,loginUser,error}=useFirebase();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || '/';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleGoogle=(e)=>{
     signInUsingGoogle()
     .then(result=>{
      navigate( redirect_uri);
      console.log(result.user);
        })
  }

  // login information
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    loginUser(email, password, location);
    e.preventDefault();
  };




  return (
    <div className='sign-in'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
         <form onSubmit={handleSignIn}>
         
         <div class="form-floating mb-3">
            <input type="email" onBlur={handleEmailChange}  class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
         <div class="form-floating">
           <input type="password" onBlur={handlePasswordChange} class="form-control" id="floatingPassword" placeholder="Password"/>
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

export default SignIN; 
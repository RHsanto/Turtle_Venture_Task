/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signIn from '../../../img/log-in.png'
import google from '../../../img/gmail.png'
import useFirebase from '../../../hooks/useFirebase';


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
      console.log(result);
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
    <div className='signIn common-section'>
      <div className="container">
        <div className="row g-5">
         <div className="col-lg-6 logIn">
          <div className="logIn-form w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
          <div className="btn-group mb-5 mt-4">
        <button onClick={handleGoogle} className='w-100 flex-btn p-0 d-flex justify-content-between'>
          <img src={google} alt="" srcset="" className='g-img'/>
          <button className=' google-btn bg-primary w-100'> Google</button>
        </button>
        </div>
      <form onSubmit={handleSignIn}>
      <div class="form-floating mb-3">
             <input type="email" onBlur={handleEmailChange} class="form-control" id="floatingInput" placeholder="name@example.com"/>
             <label for="floatingInput">Email</label>
         </div>
          <div class="form-floating">
             <input type="password" onBlur={handlePasswordChange} class="form-control" id="floatingPassword" placeholder="Password"/>
             <label for="floatingPassword">Password</label>
          </div>
           <div className="d-flex justify-content-between mt-3 px-2">
             <p ><input type="checkbox" name="" id="" /> Remember me </p>
             <p className='text-primary'>Forget Password?</p>
           </div>
           <button type='submit' className='log-btn mt-5 bg-primary rounded w-25'>LOGIN</button>

      </form>

      <div className='text-center mt-4 text-danger'> {error}</div>
        {/* signup link */}
          <p className="text-center mt-4"> Not a member? <Link to='/sign-up'> Signup now</Link></p>
         </div>
       
         </div>
         <div className="col-lg-6">
          <img src={signIn} alt="" className='simg' />
         </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
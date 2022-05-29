/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../../img/sign-up-removebg-preview.png'
import google from '../../../img/gmail.png'
import useFirebase from '../../../hooks/useFirebase';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, registerUser, error, saveUser,displayName,signInUsingGoogle ,saveUser2} = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/';

// google authentication

const handleGoogle=(e)=>{
  signInUsingGoogle()
  .then(result=>{
    const user =result.user;
  saveUser2(user.email,user.displayName);
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

  const handleSignUpSubmit = (event) => {
    registerUser(name, email, password);
    saveUser(email,displayName);
    event.preventDefault();
    const emails = event.target.email.value;
    const passwords = event.target.password.value;

    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({emails, passwords})
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success){
            localStorage.setItem('accessToken', data.accessToken);
            navigate( redirect_uri);
        }
        console.log(data);
    })
  
  };
 

  return (
    <div className='signIn common-section'>
    <div className="container">
      <div className="row g-5">
       <div className="col-lg-6 logIn">
         {/* for window */}
        <div className="logIn-form w-75 p-5 mx-auto shadow bg-light ">
          {/* here use button group */}
        <div className="btn-group mb-5 mt-4">
        <button onClick={handleGoogle} className='w-100 flex-btn p-0 d-flex justify-content-between'>
          <img src={google} alt="" srcset="" className='g-img'/>
          <button className=' google-btn bg-primary w-100'> Google</button>
        </button>
        </div>
        {/* here start sign up form  */}
           <form   onSubmit={handleSignUpSubmit}>
           <div class="form-floating mb-3">
               <input type="text"  onBlur={handleNameChange} class="form-control" id="floatingInput" placeholder="name"/>
               <label for="floatingInput">Username</label>
               
           </div>
            <div class="form-floating mb-3">
               <input type="email"  onBlur={handleEmailChange} class="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Email</label>
           </div>
            <div class="form-floating mb-3">
               <input type="password"  onBlur={handlePasswordChange} class="form-control" id="floatingPassword" placeholder="Password"/>
               <label for="floatingPassword">Password</label>
            </div>
            
               <button type='submit' className='log-btn mt-5 bg-primary rounded w-25'>LOGIN</button>
           </form>
           
          <div className='text-center mt-4 text-danger'> {error}</div>
     {/* here end sign up form */}

      
      {/* signup link */}
        <p className="text-center mt-4">I'm already a member?
         <Link to='/sign-in'> Sign in</Link></p>
       </div>

     
       </div>
       <div className="col-lg-6">
        <img src={signup} alt="" className='simg' />
       </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
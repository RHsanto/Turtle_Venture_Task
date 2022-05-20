import React from 'react';
import './all.css'
const SignIN = () => {
  return (
    <div className='sign-in'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
         <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Password</label>
         </div>
         <button type='submit'>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
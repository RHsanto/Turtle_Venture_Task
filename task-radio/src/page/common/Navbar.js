import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const clientId ="997390170447-rkpk3l9lltfi7d9qbtcukksodou5sc75.apps.googleusercontent.com"
const Navbar = () => {
  // const { user ,logOut} = useFirebase();
  const [user,setUser]=useState("")
  const onSuccess=(response)=>{
    setUser(response.profileObj);
  }
  const onFailure=(response)=>{
    console.log("LOGIN FAIELD! Current user :",response);
  }
  const logout=()=>{
   alert(" Log out Confirm!")
   window.location.reload()
  }
  return (
    <div className='menubar'>
    <div className="container">
      <div className="row">
        <div className="col ">
        <div className="d-flex mt-2 justify-content-between align-items-center">
       <div className="logo"><h1>Radio Station</h1></div>
       <div className="nav d-flex align-items-center">
       <NavLink to='/'>Radio Widget</NavLink>
       <NavLink to='/all-station'>All Station</NavLink>
       <NavLink to='/add-station'>Add Station</NavLink>
       {/* <>
        {user?.email ?
    <>  {user.photoURL ?
    <img className="UserImg ms-4" src={user.photoURL} alt="" />
    : <><FaUserCircle className='text-light fs-1 ms-4'/></>
    }
    <p className='m-2'>{user?.displayName}</p>
     <button className='bg-danger border-0 text-light  p-2 rounded ms-2'
      onClick={logOut}> <FiLogOut/> Sign-out</button>
    </>:
    <><NavLink to='/sign-in'><button className='ms-2 bg-primary border-0 text-light  p-2 rounded' >
    Sign-in</button></NavLink></>
  }
        </> */}
       
      {user?.email ? 
      <div className='d-flex align-items-center'>
          <div className='ms-4 me-2'>{user?.givenName}</div>
      <div ><img  src={user?.imageUrl} alt="" className="UserImg me-4"/></div>  <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    /></div> 
      : <div className='ms-4'>
      <GoogleLogin
  clientId={clientId}
  buttonText="Login"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
/></div>
    }
       <div>
      
    
       </div>


       </div>
     </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
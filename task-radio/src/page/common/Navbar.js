import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user ,logOut} = useFirebase();

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col">
        <div className="d-flex justify-content-between align-items-center">
       <div className="logo"><h1>Radio Task</h1></div>
       <div className="nav">
       <NavLink to='/'>Task 2</NavLink>
        <div>
        {user?.email ?
    <>  {user.photoURL ? <img className="UserImg " src={user.photoURL} alt="" />
    : <><FaUserCircle className='text-light fs-1'/></>}
     <button className='bg-danger border-0 text-light  p-2 rounded ms-2'
      onClick={logOut}> <FiLogOut/> Sign-out</button>
    </>:
    <><NavLink to='/sign-in'><button className='ms-2 bg-primary border-0 text-light  p-2 rounded' >
    Sign-in</button></NavLink></>
  }
        </div>
      {/* //  <NavLink to='/sign-in'>Sign in</NavLink>
      // <NavLink to='/sign-up'>Sign up</NavLink> */}
       </div>
     </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user ,logOut} = useFirebase();

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
       <>
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
        </>
       </div>
     </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
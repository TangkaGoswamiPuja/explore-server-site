import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../AuthFile/Auth";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSignout = () => {
      logOut()
        .then()
        .catch()
  
    }

    const links = <>
    <li  ><NavLink to="/">Home</NavLink></li>
    <li><NavLink to='/all'>All Tourists Spot
</NavLink></li>
     {user &&
      <>  <li><NavLink to="/add">Add Tourists Spot</NavLink></li>
      <li><NavLink to="/mylist">My list</NavLink></li></>
    } 
    <li><NavLink to="/no">More</NavLink></li>




  </>
  return (
    <div className="" >
      <div className="navbar bg-orange-200  ">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className='w-16' src="https://i.ibb.co/b1xctDg/travel.png" alt="" />
            <p className="text-4xl font-semibold ">EXPLORE</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">

          {user ?
            <>
             
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar my-anchor-element ">
              <div className="w-10 rounded-full">
            <img alt="" src={user.photoURL} /> 
                  </div></div>
                  <Tooltip  anchorSelect=".my-anchor-element" place="top">  
                   {user?.email} </Tooltip>
           
              <button onClick={handleSignout} className="btn btn-outline btn-error">SignOut</button></>
            : <><Link to="/login" className="btn btn-outline btn-error">Login</Link>
             <Link to="/register" className="btn btn-outline btn-error">Register</Link></>
          }

        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
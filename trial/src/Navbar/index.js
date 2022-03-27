import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from "react";

const Navbar = () => {
  const [uid  , setuid]=useState("Nobody")
  return (
    <div >
      <ul className='flex justify-evenly'>
        <li><input type="text" onChange={e =>setuid(e.target.value)} /></li>
        <li><Link to="/">home</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to={`/user/${uid}`}>User</Link></li>
      </ul>
    </div>
  );
  };
export default Navbar;
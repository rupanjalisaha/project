import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return ( 
    <div className='Navbar'>
      <div className='Navbar-header'>
        E-Learning
      </div>
        <div className='navbar-menu'>
            <div className='courseName'><Link to="/">Home</Link></div>
            <div className='courseName'><Link to="/Array">Array</Link></div>
            <div className='courseName'><Link to="/Stack">Stack</Link></div>
            <div className='courseName'><Link to="/Queue">Queue</Link></div>
            <div className='courseName'><Link to="/LinkedList">Linked List</Link></div>
            <div className='courseName'><Link to="/Tree">Tree</Link></div>
            <div className='courseName'><Link to="/Graph">Graph</Link></div>
            <div className='courseName'><Link to="/Blog">Blogs</Link></div>
            <div className='courseName'><Link to="/Quiz">Quiz </Link></div>
            <div className='courseName'><Link to="/SignUp">Sign Up</Link></div>
            
        </div>
    </div>
  )
}

export default Navbar;
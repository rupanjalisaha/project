import React,{useState} from 'react';
import './LogIn.css';
function LogIn() {
    const [user,setUser] = useState({
        email: " ",
        password: " ",
    })
    const handleChange = e => {
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    return (
      <div className='LogIn'>
        <h1>Log In</h1>
        <hr></hr>
        <input type='text' name="email" value={user.email} placeholder='Enter Your Email Id' onChange={handleChange}></input>
        <br></br>
        <input type='password' name="password" value= {user.password} placeholder='Enter Your Password' onChange={handleChange}></input>
        <div className='button'>Log In</div>
        <div>or</div>
        <div className='button'>Register</div>
      </div>
    )
  }
  
  export default LogIn;
  
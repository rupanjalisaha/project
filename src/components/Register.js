import React, {useState} from 'react';
import '../App.css';
import Navbar from './Navbar';
import axios from "axios";
import Sidebar from "./Sidebar";
const Register = ()=> {
    const [user,setUser] = useState({
        name: "" ,
        email: "",
        password: "",
        reEnterPassword: "",
    })
    const handleChange = e => {
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const Register = ()=> {
        const {name, email, password, reEnterPassword} = user
        if (name && email && password && reEnterPassword && (password === reEnterPassword)){
            /*axios.post("https://localhost:9002/register", user)
            //alert("posted")
            .then(res => console.log(res))*/
            alert("you have been registered successfully");
        }
        else if (name && email && password && reEnterPassword && (password !== reEnterPassword)){
            alert("Passwords do not match")
        }
        else{
            alert("Invalid input")
        }
    }
  return (
    <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div className='Register' style={{position:"absolute", alignContent:"center"}}>
      <h1>Register</h1>
      <hr></hr>
      <input type='text' name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
      <br></br>
      <input type='text' name="email" value={user.email}  placeholder='Your Email Id' onChange={handleChange}></input>
      <br></br>
      <input type='password' name="password" value={user.password} placeholder='Your Password' onChange={handleChange}></input>
      <br></br>
      <input type='password' name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Your Password' onChange={handleChange}></input>
      <div className='button' onClick={Register} >Register</div>
      <div>or</div>
      <div className='button'>Log In</div>
    </div>
    </div>
  )
}

export default Register;

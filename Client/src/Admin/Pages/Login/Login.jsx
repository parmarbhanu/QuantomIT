import React, { useState } from 'react'
import './Login.css'
import axios from "axios"

import { useNavigate } from "react-router-dom"

const Login = (props) =>  {
  const history = useNavigate()
  const [ user, setUser] = useState({
      email:"",
      password:"",
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  async function login() {
    try {
      const { email, password } = user
      await axios.post("http://localhost:5000/admin/login",user)
      .then(()=>{props.setauthentic(true)})
      .catch((err)=>{alert(err)})
      // history("/mii-admin");
    } catch (err) {
      alert(err);
    }
  }
  return (
  <div className="main">
    <p className="sign" align="center">Log in</p>
    <form className="form1"/>
      <input className="un "  type="text" name="email" value={user.email} placeholder="Your Email"  onChange={ handleChange } align="center"/>
      <input className="pass" align="center" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
      <a className="submit" align="center" onClick={()=>{login()}}>Log in</a>

            
                
    </div>
     

  )
}

export default Login

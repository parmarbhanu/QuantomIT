import React, { useEffect, useState } from 'react'
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
      const {email,password } = user
      await axios.post("/admin/login",user)
      // .then(()=>{props.setauthentic(true)})
      // await axios.post("admin/login",user)
      //  .then((res)=>{history("/AdminBody")});
      .then((r)=>{history("/AdminBody")})
      .catch((err)=>{alert(err)})
      // history("/AdminBody");
    } catch (err) {
      alert(err);
    }
  }

  // const navigate=useNavigate();

  

  
  return (
  <div className="main">
    <p className="sign" align="center">Log in</p>
    <form className="form1"/>
    <input className="un"      type="text"     name="email"    value={user.email}     placeholder="Your Email"     onChange={ handleChange }  align="center"/>
     <input className="pass"   type="password" name="password" value={user.password}  placeholder="Your Password"  onChange={ handleChange }  align="center"/>
       <a className="submit" align="center" onClick={()=>{login()}}>Log in</a>
       {/* <a className="submit" align="center" onClick={()=> {navigate(`/adminbody/`)}}>Log in</a> */}
            
                
    </div>
     

  )
}

export default Login






  


  










  



 
   
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

  const [ regi, setregi] = useState({
    username:"",
    date:"",
    email:"",
    password:"",
})

const handleCh = e => {
  const { name, value } = e.target
  setregi({
      ...regi,
      [name]: value
  })
}

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


  
  async function register() {
    try {
      const {username,date,email,password}=regi;
       if(!username||!date||!email||!password){
          alert("Incomplet Details");
          // return;
       }
      await axios.post("/admin/register",regi)
      .catch((err)=>{alert(err)})
      // .then((res)=>{ ();});
      // .then((r)=>{history("/AdminBody")})
    } catch (err) {
      console.error(err);
    }
  }
   

  const [issignin, setissignin] = useState(true);
  
  return (
  <div className="main">
    {/* <p className="sign" align="center">Log in</p>
    <form className="form1"/>
    <input className="un"      type="text"     name="email"    value={user.email}     placeholder="Your Email"     onChange={ handleChange }  align="center"/>
     <input className="pass"   type="password" name="password" value={user.password}  placeholder="Your Password"  onChange={ handleChange }  align="center"/>
       <a className="submit" align="center" onClick={()=>{login()}}>Log in</a> */}
       {/* <a className="submit" align="center" onClick={()=> {navigate(`/adminbody/`)}}>Log in</a> */}

         {/* here        */}
         <div className='signin-singup-outer-box'>
      <div className={issignin?"container":"container right-panel-active"}  id="container">
        <div className="form-container sign-up-container">
          <div className='form'>
            <h1 >Create Account</h1>
            <h1 >Sign Up</h1>
            <input type="text" placeholder="Username" name="username" value={regi.username} onChange={ handleCh }/>
            <input type="email" placeholder="Email" name="email" value={regi.email} onChange={ handleCh } />
            <input type="date" placeholder="Date" name="date" value={regi.date} onChange={ handleCh} />
            <input type="password" placeholder="Password"  name="password" value={regi.password} onChange={ handleCh }/>
            <button onClick={()=>{register()}}>Sign Up</button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className='form'>
            <h1 >Sign in</h1>
            <input className="un"type="text"     name="email"    value={user.email}     placeholder="Your Email"     onChange={ handleChange }  align="center"/>
            <input className="pass"   type="password" name="password" value={user.password}  placeholder="Your Password"  onChange={ handleChange }  align="center"/>
       <a className="submit" align="center" onClick={()=>{login()}}></a> 
            {/* <input type="text" placeholder="Email or Username"  name="usernameoremail" value={user.email} onChange={ handleChange }/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={ handleChange } /> */}
            <button onClick={()=>{login()}}>Sign In</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button className="ghost" id="signIn" onClick={()=>{setissignin(true)}}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button className="ghost" id="signUp" onClick={()=>{setissignin(false)}}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
  )
}

export default Login





  










  



 
   
import React, { useState } from 'react'
import Blog from '../Pages/Blog/Blog'
import './adminbody.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AdminBody() {
  const [admincontent, setadmincontent] = useState("blog");
  // const history = useNavigate();

  async function logout() {
    try {
      await axios.get("admin/logout").then((res)=>{alert("Logged out successfully")})
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div >
      <nav className="nav-bar">
       <div className="left-align">
         <h1 className="nav-link text-white" style={{fontSize:"24px"}}>Admin Page</h1>
        </div>
         <div className="right-align">
           <button className="nav-link text-white" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
          </div>   
        </nav>
        <Blog />
        </div>
  )
}

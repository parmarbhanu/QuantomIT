import React, { useEffect, useState } from 'react'
import './adminbody.css'
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export default function AdminBody() {
  const [admincontent, setadmincontent] = useState("blog");
  // const history = useNavigate();


  // const [authentic, setauthentic] = useState(false);
  // // console.log("bhanu",authentic);
  //   useEffect(() => {
  //      axios.get("/admin/isauth")
  //     .then((res)=>{setauthentic(res.data)
  //     if(res.data===false){
  //       Navigate("/login")
  //     }
  //     });

  //   }, [])

  // async function logout() {
  //   try {
  //     await axios.get("admin/logout").then((res)=>{alert("Logged out successfully")})
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // const apicall=async ()=>{
  //   await axios.get(`/contactapi/allmsg`).then((res) => { setQuery(res.data) });
  // }
  // useEffect(() => {
  //   apicall();
  // }, [])

  return (
    <div>
    <h2 className='contactheading'>Response</h2>
     <div className="query-component">
        <table>
          <thead>
               <tr>
                      <th className='no'>S.No</th> 
                        <th className='name'>Name</th> 
                        <th  className='date'>Date Created</th>
                        <th  className='role'>Role</th>
                        <th  className='status'>Status</th>
                        <th  className='action'>Action</th>
                 </tr>
               
         </thead>       
       </table>
       </div>
       <h1>I Get Stuck What Kind of data need to display here So it is empty </h1>
        </div>
  )
}

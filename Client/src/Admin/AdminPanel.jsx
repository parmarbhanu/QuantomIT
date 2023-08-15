import React, { useEffect, useState } from 'react'
import Login from './Pages/Login/Login'
import AdminBody from './AdminBody/AdminBody';
import axios from 'axios';
// import Header from './Pages/Universal/Header/Header'
export default function AdminPanel() {

    const [authentic, setauthentic] = useState(false);
      useEffect(() => {
         axios.get("/admin/isauthenticated")
        .then((res)=>{setauthentic(res.data)});
      }, [])
      
  return (
    <div style={{padding:"10vh"}}>
        {/* <Header/> */}
        {authentic?<AdminBody/>:<Login setauthentic={setauthentic}/>}
        
    </div>
  )
}

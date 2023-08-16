import React, { useEffect, useState } from 'react'
import Experimentbox from './Experimentbox'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [exp, setexp] = useState([]);
  const apicall=async ()=>{
    await axios.get("blog/allblogs").then((res) => { setexp(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])


  return (
    <div >
     <button> <Link to="/login">Login</Link></button>  
     <div className='displaynew'>
     {exp.map((item) => {
      
        return  <Experimentbox  id={item._id} nameofexp={item.nameofexp} imgUrl={item.imgUrl} />  })}
  
     </div>
    </div>
  )
}

export default Home



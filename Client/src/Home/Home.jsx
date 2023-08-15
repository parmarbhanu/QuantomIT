import React, { useEffect, useState } from 'react'
import Experimentbox from './Experimentbox'
import axios from 'axios';

const Home = () => {

  const [exp, setexp] = useState([]);
  const apicall=async ()=>{
    await axios.get("blog/allblogs").then((res) => { setexp(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div>
    
     {exp.map((item) => {
        return  <Experimentbox    nameofexp={item.nameofexp} description={item.description} />  })}
  
    
    </div>
  )
}

export default Home


{/* <img  className='popupimg' src={item?.imgUrl} alt="foto" />  */}
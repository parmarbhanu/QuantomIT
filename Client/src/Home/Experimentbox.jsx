import React, { useState } from 'react'
import './Home.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Single from './Single';

 
const Experimentbox = (props) => {
  const navigate=useNavigate();

  // console.log(props.imgUrl)
  return (
    
    <div className='houseBox'>
      <div className="houseBox-body">
        <div className="houseBox-imgSection">    
                <img src={props.imgUrl} alt="exp image" onClick={()=> {navigate(`/Single/${props.id}`)}}/>
            <div className="houseBox-imgsection-textArea">
                <p> { props.nameofexp}</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Experimentbox








   
    
 




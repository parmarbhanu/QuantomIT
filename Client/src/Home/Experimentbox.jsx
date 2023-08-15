import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Experimentbox = (props) => {
  return (
<div className='houseBox'>
      <div className="houseBox-body">
        <div className="houseBox-imgSection">
            <div className="houseBox-top-tag-box">
                {`${props.title}`}
            </div>
       
                {/* <img src={props.houseboximgUrl} alt="house ki image" onClick={()=> {navigate(`/housepreview/${props.id}`)}}/> */}
               
            <div className="houseBox-imgsection-textArea">
                <p> { props.Purpose}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experimentbox








   
    
 




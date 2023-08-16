import React, { useEffect, useState } from 'react'
import './Single.css'
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Single = () => {
  const { id } = useParams();

    const [content,setContent]=useState([]);
  const blogapi = async () => {
    await axios.get(`http://localhost:5000/blog/singleblog/${id}`).then((blog) => {
      setContent(blog.data);
      // console.log(blog.data)
    });
  };   

  // console.log(content)

useEffect(() => {
    blogapi();
}, []);

// console.log(id)
// console.log(content)

  return (

<div className='housePreivew-page'> 
      <div className="housePreview-topSection">
          <img src={content.imgUrl} alt="exp image"/>
        
        
      </div>
      <div className="housePreview-section-1 housePreview-section">        
        <div className="housePreview-top">
          <div className="housePreview-top-left">
            <p className="housePreview-name">
             Experiment for {content.nameofexp} 
            </p>
          </div>               
        </div>        

      </div>
      <div className="housePreview-section-2 housePreview-section">
        <div className="housePreview-discription">
          <div className="housePreview-discription-top">
     
          <div className="housePreview-discription-houseDetailIcon">
            <div>
              <p>diffucilty-{content.deffcuilty}</p>
             
               
                          
            </div>
            <div>
              <p>Subject- {content.subject}</p>         
            </div>
            <div>
                           
            </div>
          </div>
          <div className="housediscription-textArea">
            <h3>Safety</h3>
            <p>{content.safety} </p>
          </div>
          <div className="housediscription-textArea">
            <h3>Discription</h3>
            <p>{content.description} </p>
          </div>
          <div className="housediscription-textArea">
            <h3>material</h3>
            {content.materiallist&&content.materiallist.map((item)=>{
              return <p>{item}</p>
            })}
          </div>
          <div className="housediscription-textArea">
            <h3>instruction</h3>
            {content.instruction&&content.instruction.map((item)=>{
              return <p>{item}</p>
            })}
          </div>
  
 
        </div>
      </div>    
    </div>
    </div>
  )
}

export default Single





  


 
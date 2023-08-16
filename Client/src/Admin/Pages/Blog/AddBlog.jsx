import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../Firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';

const AddBlog = () => {
  
  const [FormData,setFormData]=useState({
       nameofexp:"",
       description:"",
       deffcuilty:"",
       Rating:"",
       subject:"",
       imgUrl:"",
        materiallist:[],
       safety:"",
         instruction:[]
  });
  
  const [images,setimages]=useState([]);
  const [imageUpload,setimageUpload]=useState(null);
  const fileListRef=ref(storage,'files/');
  // const [imaguploadsuccessfully, setimaguploadsuccessfully] = useState(false);


  const afterurl=async(url)=>{
    setFormData({
      ...FormData,
      imgUrl: url
  })
    alert("Image was Succesfully Updated");
    setimageUpload(true);
  }  
 
  const handleChange = e => {
      const { name, value } = e.target
      setFormData({
          ...FormData,
          [name]: value
      })
  }

  async function submit() {
    try {
      await axios.post("http://localhost:5000/blog/addblog",FormData)
      .then(()=>{alert("Blog added successfully");
       window.location.reload()})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  
  
  const changeimage=async ()=>{

    try{
     if(imageUpload!==null){
        const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
        await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            console.log(url); 
             afterurl(url);
          })
        }) 
    }
    else{
        console.log("nothing")
    }
   //  console.log(user);
      } catch (err) {
     console.error(err);
       }
    }

    useEffect(() => {
      // console.log("img change")
        changeimage();
    }, [imageUpload])


  return (
   <div>
    <div className="add-area add_event_area" id='add_event_area'>  
           <div >
                <input type="text" id="" className='eventtitle' placeholder='nameofexp'  onChange={ handleChange } name="nameofexp" value={FormData.nameofexp}/>
                <input type="text" id="" className='eventtitle' placeholder='description'  onChange={ handleChange } name="description" value={FormData.description}/>
                <input type="text" id="" className='eventtitle' placeholder='deffcuilty'  onChange={ handleChange } name="deffcuilty" value={FormData.deffcuilty}/>
                <input type="text" id="" className='eventtitle' placeholder='subject'  onChange={ handleChange } name="subject" value={FormData.subject}/>
                <input type="text" id="" className='eventtitle' placeholder='materiallist'  onChange={ handleChange } name="materiallist" value={FormData.materiallist}/>
                <input type="text" id="" className='eventtitle' placeholder='safety'  onChange={ handleChange } name="safety" value={FormData.safety}/>
                <input type="text" id="" className='eventtitle' placeholder='instruction'  onChange={ handleChange } name="instruction" value={FormData.instruction}/> 

               
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img" accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setimageUpload(event.target.files[0])}} />
                </div>
                <button onClick={()=>{submit()}} id='blog-txt-add' >Add</button>
                <button type="reset">Clear</button>
            </div>
        </div>
        </div>
  )
}

export default AddBlog
















  

  


 
 




  

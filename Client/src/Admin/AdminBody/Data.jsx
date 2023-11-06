import React from 'react'
import './adminbody.css'
const Data = (props) => {
    console.log("bhanu",props)
  return (
    <div>
         <div>
                <table >
                
                    <tr>
                    
                        <td className='name'>{props.username}</td>
                        <td  className='date'>{props.date}</td>
                        <td  className='role'>{props.role}</td>
                        <td  className='status'>{props.status}</td>
                        <td  className='action'>{props.rolel}</td>
                        
                    </tr>
                  {/* </tbody> */}
                </table>
            </div> 
    </div>
  )
}


export default Data
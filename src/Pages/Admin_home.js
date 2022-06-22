import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import pick from '../Images/pck.jpg'
import logs from '../Images/logs.png'
import zones from '../Images/red.png'
import avatar from '../Images/avatar.png'

const Admin_home = () => {
  const [Nxt, setNxt] = useState(0);
  const navigate=useNavigate(); 
  
  const handleclick =()=>{
         navigate('/Prof');
    }
  const handleop1 =(i)=>{
        console.log(i);
        navigate('/fourth');
  } 
  const handleop2 =()=>{
        navigate('/fifth');
  } 
  const handleop3 =()=>{
         navigate('/sixth');
  } 
 
    

  return (
    <>
    <p id='txt'>Welcome back, Admin !</p>
      <div className='prof' id='avatar' onClick={handleclick}>
      <img className='ima' width={80} src={avatar}></img>
      </div>
      <div className='op' id='op1'  onClick={()=>handleop1(0)}>
        <img className='im1' width={80} src={pick}></img>
        <div>Manage Pickup</div>
      </div>
      <div className='op' id='op2' onClick={()=>handleop2(0)}>
      <img className='im2' width={80} src={zones} ></img>
      <div>Find Red Zones</div>
      </div>
      <div className='op' id='op3' onClick={()=>handleop3(0)}>
      <img className='im3' id='im3' width={80} src={logs}></img>
      <div>Check Logs</div>
      </div>
      </>
  )
}

export default Admin_home
import React,{useState} from 'react'
import avatar from '../Images/avatar.png'
import './Logs.css'
import { useNavigate } from "react-router-dom";

const Logs = () => {
    const navigate=useNavigate(); 
  
  const handleop1 =(i)=>{
        console.log(i);
        navigate('/log1');
  } 
  const handleop2 =()=>{
        navigate('/log2');
  } 
  const handleop3 =()=>{
         
         navigate('/log3');
  }
  return (
    <>
    <div className='ctnlg'>
    <div className='eachp' onClick={handleop1}>
      <img className='thmb' width={80} src={avatar}></img>
      Ramesh M</div>
      <div className='eachp' onClick={handleop2}>
      <img className='thmb' width={80} src={avatar}></img>
      Sanjay K</div>
      <div className='eachp' onClick={handleop3}>
      <img className='thmb' width={80} src={avatar}></img>
      Jaya RV</div>
    </div>
   
    </>
  )
}

export default Logs
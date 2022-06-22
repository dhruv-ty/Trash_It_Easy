import React from 'react'
import './Each_item.css'
import NumericInput from 'react-numeric-input';
import { useNavigate } from "react-router-dom";
import auc from '../Images/auc1.jpg'
import bulb from '../Images/bulb.png'

const Each_item = () => {

  const navigate=useNavigate(); 
  const handleclick =()=>{
    navigate('/Psuck');
}
  return (
    <div className='con'>
   
    <div className='details'>
    <div className='dets' id='op1'>
      <div className='iname'>Battery</div>
      <div className='type'>Electronic</div>
    </div>
    <div className='dets' id='op2'>
    <div className='iname'>Price:</div>
      <div className='type'>200</div>
    </div>
    <img className='ico' width={115} src={auc} ></img>
    </div>
    <span id='wrk'>Working Condition : 
    </span>
    <img className='on' width={60} src={bulb} ></img>
    <img className='of' width={60} src={bulb} ></img>

    <div className='offctn'>Your Offer :
    <NumericInput className='off' min={200} max={50000} value={201}/>    
    </div>
    <button className='nxt' onClick={handleclick}>Place Your Bid</button>
    </div>
  )
}

export default Each_item
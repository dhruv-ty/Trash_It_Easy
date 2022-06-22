import React,{useState} from 'react'
import Switch from 'react-js-switch';
import './Auction.css'
import { useNavigate } from "react-router-dom";

const Auction = () => {
const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };
  const navigate=useNavigate(); 
  const handleclick =()=>{
    navigate('/Psuck');
}
  return (
    <>
    <div className='ctn2'>
    <input type='text' placeholder='Item Name'></input>
    <input type='text' placeholder='Item Type'></input>
    <input type='text' placeholder='Base Price'></input>
    <div className='ctn1'>
    <span>Working Condition ?</span> 
    <Switch  size={50} color='white' borderColor={{on:'#f9f9f9'}} backgroundColor={{on:'#5cad5c',off:'#f9f9f9'}} value={isSwitchOn} onChange={switch_onChange_handle} />  
    </div>
    <button className='sub' onClick={handleclick}>Place on Auction</button>
    
    </div>
    </>
  )
}

export default Auction
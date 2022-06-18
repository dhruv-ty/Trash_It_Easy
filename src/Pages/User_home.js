import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import pick from '../Images/pck.jpg'
import auc from '../Images/auc1.jpg'
import trivia from '../Images/trivia.jpg'
import avatar from '../Images/avatar.png'

const User_home = () => {
  const [Nxt, setNxt] = useState(1);
  const navigate=useNavigate(); 
  const handleclick =()=>{
         navigate('/Prof');
    }
   
 
    

  return (
    <>
    <p id='txt'>Welcome back, Dhruv !</p>
      <div className='prof' id='avatar' onClick={handleclick}>
      <img className='ima' width={80} src={avatar}></img>
      </div>
      <div className='op' id='op1'>
        <img className='im1' width={80} src={pick}></img>
        <div>Schedule a Pick Up</div>
      </div>
      <div className='op' id='op2'>
      <img className='im2' width={80} src={auc}></img>
      <div>Sell Your Trash</div>
      </div>
      <div className='op' id='op3'>
      <img className='im3' id='im3' width={80} src={trivia} ></img>
      <div>Take a Quiz</div>
      </div>
      </>
  )
}

export default User_home
import React, { useState,useEffect } from 'react'
import './Pickup.css'
import { Stepper,Step } from 'react-form-stepper';
import Pickup_1 from './Pickup_1';
import Pickup_2 from './Pickup_2';
import Pickup_3 from './Pickup_3';
import { useNavigate } from "react-router-dom";
import Pickup_suc from './Pickup_suc';



const Pickup = () => {
    const [Stp, setStp] = useState(0);
    const [Active, setActive] = useState(true)
    const handlenext = ()=>{
            setStp(Stp+1);
            setActive(false);
    }
    const navigate=useNavigate(); 
    useEffect(() => {
      if(Stp == 3)
      navigate('/p_suc');
    }, [Stp]);
  
   

  return (
    <>

<Stepper id='s1'steps={{completed:{Active}}} activeStep={Stp} styleConfig={{activeBgColor:'#5cad5c',completedBgColor:'#5cad5c'}}>
    <Step label="Enter Basic Details" />
    <Step label="Enter Pickup Location" />
    <Step label="Enter Date and Time" />
  </Stepper>
  
  <div className='container'> 
  {Stp==0 && <Pickup_1></Pickup_1>} 
  {Stp==1 && <Pickup_2></Pickup_2>}
  {Stp==2 && <Pickup_3></Pickup_3>}

  <button onClick={handlenext} className='nxt'>Next</button>
  
  
  </div>
  </>
  )
}

export default Pickup
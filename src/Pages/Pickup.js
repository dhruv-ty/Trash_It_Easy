import React, { useState,useEffect } from 'react'
import './Pickup.css'
import { Stepper,Step } from 'react-form-stepper';
import Pickup_1 from './Pickup_1';
import Pickup_2 from './Pickup_2';
import Pickup_3 from './Pickup_3';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import './Pickup.css'
import { useNavigate } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker';
import Pickup_suc from './Pickup_suc';


const options = [
  { value: 'solid', label: 'Solid Waste' },
  { value: 'liquid', label: 'Liquid Waste' },
  { value: 'recycle', label: 'Recyclable Rubbish' },
];


const Pickup = () => {
    const [Stp, setStp] = useState(0);
    
    const [type, settype] = useState("");
    const [weight, setweight] = useState(0 );
    const [address, set] = useState(""  );
    const [dtm, setdtm] = useState("")
    
    const [Active, setActive] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const handlenext = ()=>{
            setStp(Stp+1);
            setActive(false);
    }
    const navigate=useNavigate(); 
   /*useEffect(() => {
      if(Stp == 3)
      navigate('/p_suc');
    }, [Stp]);*/
    const [value, onChange] = useState(new Date());
   

  return (
    <>

<Stepper id='s1'steps={{completed:{Active}}} activeStep={Stp} styleConfig={{activeBgColor:'#5cad5c',completedBgColor:'#5cad5c'}}>
    <Step label="Enter Basic Details" />
    <Step label="Enter Pickup Location" />
    <Step label="Enter Date and Time" />
  </Stepper>
  
  <div className='container'> 
  
  {Stp==0 && 
  <>
  <Select className='type'
         defaultValue={options[0]}
         onChange={setSelectedOption}
         options={options}
         placeholder="Type of Waste"
       />
   <div className='wtg'>Weight {"(in Kg)"}</div>    
   <NumericInput className='wt' min={0} max={50} value={5}/> 
  </>
  }

  {Stp==1 && 
     <>
     <div className='ctn2'>
     <input type='text' placeholder='Address Line 1'></input>
     <input type='text' placeholder='Address Line 2'></input>
     <input type='text' placeholder='Area Code'></input>
     </div>
     </>
  }
  {Stp==2 && 
     <>
     <DateTimePicker className='Dtm' onChange={onChange} value={value} />
   </> 
  }
  
  {Stp==3 &&
   <Pickup_suc/>
  }

  <button onClick={handlenext} className='nxt'>Next</button>
  
  
  </div>
  </>
  )
}

export default Pickup
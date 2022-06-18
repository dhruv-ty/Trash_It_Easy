import React,{useState} from 'react'
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import './Pickup.css'

const options = [
    { value: 'solid', label: 'Solid Waste' },
    { value: 'liquid', label: 'Liquid Waste' },
    { value: 'recycle', label: 'Recyclable Rubbish' },
  ];

const Pickup_1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
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
    
  )
}

export default Pickup_1
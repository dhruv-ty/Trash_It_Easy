import React,{useState} from 'react'
import DateTimePicker from 'react-datetime-picker';
import './Pickup_3.css'

const Pickup_3 = () => {
    const [value, onChange] = useState(new Date());
    console.log(value);
  return (
    <>
      <DateTimePicker className='Dtm' onChange={onChange} value={value} />
    </>
  )
}

export default Pickup_3
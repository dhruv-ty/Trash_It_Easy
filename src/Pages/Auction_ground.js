import React from 'react'
import Tabs from '@mui/material/Tabs';
import { useNavigate } from "react-router-dom";
import Tab from '@mui/material/Tab';
import { useEffect, useState} from 'react'
import './Auction_ground.css'
import auc from '../Images/auc1.jpg'

const Auction_ground = () => {
    const [value, setValue] = useState('listing');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const navigate=useNavigate(); 
      const handleclick =()=>{
        navigate('/each');
    }
    return (
    <>
    <div className='container'>
    <Tabs className='mtab'
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#5cad5c",
           }
          }}
        aria-label="secondary tabs example"
        variant='fullWidth'
      >
        <Tab value="listing" label="Items Up for Auction" />
        <Tab value="myitem" label="My Listings" />

      </Tabs>
     
      <div className='eachitem' onClick={handleclick}>
      <img className='thmb' width={80} src={auc}></img>
      <div id='det'>Battery</div>
      </div>
      <div className='eachitem'>
      <img className='thmb' width={80} src={auc}></img>
      <div id='det'>Display Chip</div>
      </div>
      </div>
    </>
  )
}

export default Auction_ground
import React from 'react'
import './EachComp.css'
import { img_300 } from '../config'
import { useNavigate } from "react-router-dom";

const EachComp = ({title,url}) => {
  return (
    <>
    <div className='detail'>
       <img className='thumbnail' src={`${url}`}></img>
       <div className='txt'>{title}</div>
      </div>
    </>
    
  )
}

export default EachComp
import React from 'react'
import './EachComp.css'
import { img_300 } from '../config'

const EachComp = ({title,url}) => {
  return (
    <>
    <div formaction="https://www.w3docs.com" className='detail'>
       <img className='thumbnail' src={`${url}`}></img>
       <div className='txt'>{title}</div>
      </div>
    </>
    
  )
}

export default EachComp
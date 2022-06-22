import React from 'react'
import './signin.css'
import logo from '../Images/logo2.jpg'

const signin = () => {
  return (
  <div className='window'>
  <img className='im' width={120} src={logo}></img>
   <input classntype='text' placeholder='    Username...'></input>
    <input type='text' placeholder='    Password...'></input>
  <button className='log'>Login</button>
  </div>
  )
}

export default signin
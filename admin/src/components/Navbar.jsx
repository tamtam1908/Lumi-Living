import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-40 h-auto' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='button_logout'>Logout</button>
    </div>
  )
}

export default Navbar

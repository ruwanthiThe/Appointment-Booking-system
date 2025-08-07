import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  

  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate('/login');
  }

  const handleProfileClick = () => {
    navigate('/my-profile');
  }

  const handleAppoinmentsClick = () => {
    navigate('/my-appoinments');
  }

  const [showMenu, setShowMenu] = useState(false)
  const[token, setToken] = useState(true)

  return (
    <div className='flex justify-between items-center bg-white p-4 shadow-md border-b-2 border-gray-300 mb-3'>
      <img onClick={()=>navigate('/')} className='w-44 cursor -pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium '>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token ?
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt=""/>
            <img className='w-2.5' src={assets.dropdown_icon} alt=""/>

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p className='hover:text-black cursor-pointer' onClick={handleProfileClick}>My Profile</p>
                <p className='hover:text-black cursor-pointer' onClick={handleAppoinmentsClick}>My Appoinments</p>
                <p className='hover:text-black cursor-pointer' onClick={() => setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
          :<button  className='bg-indigo-500 text-white px-8 py-3 rounded-full hidden md:block hover:bg-indigo-600 transition-colors duration-200 cursor-pointer' onClick={handleCreateAccount}>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar

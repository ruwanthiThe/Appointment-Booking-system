import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-indigo-500 rounded-lg px-6 md:px-10 lg:px-20'>
      
      {/*------left side-----*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Your Wellness Journey Starts  <br /> Here
        </p>
        <div className='flex flx-col md:flex-row items-center gap-3 text-white text-md font-light '>
            <img className='w-28' src ={assets.group_profiles} alt=""/>
            <p>Find the best doctor for you Schedule<br className='hidden sm:block'/>
             your appointment online and get the care you need.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:from-teal-500 hover:to-teal-700 transition-colors duration-200 hover:scale-105'>
            Book Appointment
            <img src={assets.arrow_icon} alt="" className='w-5 h-5 '/>
        </a>
      </div>



      {/*------right side-----*/}
      <div className='md:w-1/2 flex items-center justify-center'>
  <img className='w-full max-w-[650px] h-auto rounded-xl shadow-lg object-cover' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header

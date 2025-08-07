import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex  bg-indigo-500 px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 rounded-lg'>
      {/*-----left side---*/}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p>Book Your Appointment</p>
            <p className='mt-4'>Expert Care Just a Click Away</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)} } className='bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm sm:text-base px-8 py-3 rounded-full mt-6 font-semibold shadow-lg hover:from-teal-500 hover:to-teal-700 transition-colors duration-200 cursor-pointer'>Create Account</button>
      </div>





      {/*-----right side---*/}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=""/>
      </div>
    </div>
  )
}

export default Banner

import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center justify-center gap-4 text-gray-800   py-10'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center '>Simply browse therough our extensive list of trusted doctors,Schedule your appoinment hassle-free.</p>
      <div className='flex gap-4 pt-5 w-full overflow-scroll sm:justify-center'>
        {specialityData.map((item,index) =>(
            <Link onClick={()=>scrollTo(0,0)} to ={`/doctors/${item.speciality}`} key={index} className='flex flex-col items-center m-2 transition-transform duration-200 hover:-translate-y-2 cursor-pointer'>
                <img src={item.image} alt="" className='w-24 h-24 object-cover rounded-full border-2 border-gray-300 mb-3'/>
                <p className='text-base font-semibold text-gray-700'>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu

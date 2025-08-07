import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        setFilterDoc(doctors.filter(doc => doc.speciality && doc.speciality.toLowerCase() === speciality.toLowerCase()));
      } else {
        setFilterDoc(doctors);
      }
    } else {
      setFilterDoc([]);
    }
  }

  useEffect(() => {
    applyFilter()
  }, [Doctors, speciality])



  return (
    <div>
      <p className='text-gray-600 '>Browse through the specialists</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-2 text-gray-600 text-sm sm:text-base'>
          <p onClick={()=> speciality?.toLowerCase() === 'general physician'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'general physician'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>General Physician</p>
          <p onClick={()=> speciality?.toLowerCase() === 'gynecologist'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'gynecologist'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
          <p onClick={()=> speciality?.toLowerCase() === 'dermatologist'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'dermatologist'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
          <p onClick={()=> speciality?.toLowerCase() === 'pediatricians'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'pediatricians'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>Pediatricians</p>
          <p onClick={()=> speciality?.toLowerCase() === 'neurologist'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'neurologist'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>Neurologist</p>
          <p onClick={()=> speciality?.toLowerCase() === 'gastroenterologist'.toLowerCase() ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality?.toLowerCase() === 'gastroenterologist'.toLowerCase() ? ' bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
        </div>

        <div className='w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {
            filterDoc.map((item, index) => (
            <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow-md flex flex-col w-full max-w-[260px] min-h-[370px] mx-auto'>
                <img src={item.image} alt="" className='bg-blue-50 w-full h-56 object-cover flex-shrink-0' />
                <div className='p-4 flex-1 flex flex-col justify-between'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500 mb-2'>
                        <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span><span>Available</span>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors

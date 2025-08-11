import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Appoinment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  },[doctors,docId])

  return (
    <div>
      {/*---------  Doctor details  -------------*/ }
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>

        <div>
          {/* -------- Doc info-name,degree & experience */}
          <p>{docInfo.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Appoinment

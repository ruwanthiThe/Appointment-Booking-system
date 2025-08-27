import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    if (doctors && docId) {
      const selectedDoctor = doctors.find(doc => doc._id === docId);
      setDocInfo(selectedDoctor || null);
    }
  }, [doctors, docId]);

  if (!docInfo) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div>
      {/*---------  Doctor details  -------------*/}
      <div>
        <div>
          <img src={docInfo.image} alt={docInfo.name} />
        </div>

        <div>
          {/* -------- Doc info - name, degree & experience */}
          <p>{docInfo.name}</p>
          <p>{docInfo.degree}</p>
          <p>{docInfo.experience} years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;


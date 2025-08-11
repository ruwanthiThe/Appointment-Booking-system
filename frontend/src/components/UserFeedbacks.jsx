import React from 'react'
import { useNavigate } from 'react-router-dom'

const feedbacks = [
  {
    name: 'Jane Doe',
    feedback: 'The booking process was seamless and the doctors were very professional. Highly recommended!',
    rating: 5
  },
  {
    name: 'John Smith',
    feedback: 'Quick response and easy to use platform. I found the right specialist in minutes.',
    rating: 4
  },
  {
    name: 'Emily Clark',
    feedback: 'Great experience! The appointment reminders were very helpful.',
    rating: 5
  }
]

const UserFeedbacks = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full py-12 bg-gray-50 flex flex-col items-center">
  <h2 className="text-md font-bold mb-8 text-blue-600">User Feedbacks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition duration-300 hover:shadow-xl">
            <div className="flex items-center mb-2">
              {[...Array(fb.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-center mb-4">"{fb.feedback}"</p>
            <p className="text-blue-600 font-semibold">- {fb.name}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-10 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        onClick={() => navigate('/feedback')}
      >
        See More Feedbacks
      </button>
    </div>
  )
}

export default UserFeedbacks

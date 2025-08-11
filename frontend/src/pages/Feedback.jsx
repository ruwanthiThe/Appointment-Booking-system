import React, { useState } from 'react'

const initialFeedbacks = [
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
  },
  {
    name: 'Michael Lee',
    feedback: 'Easy to navigate and book appointments. The doctors are very friendly.',
    rating: 5
  },
  {
    name: 'Sara Kim',
    feedback: 'I appreciate the quick confirmations and reminders. Very efficient!',
    rating: 4
  },
  {
    name: 'David Brown',
    feedback: 'The platform is simple and effective. I will use it again.',
    rating: 5
  }
]

const Feedback = () => {
  const [name, setName] = useState('')
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(5)
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedbacks([{ name, feedback, rating }, ...feedbacks])
    alert('Thank you for your feedback!')
    setName('')
    setFeedback('')
    setRating(5)
  }

  return (
    <div className="w-full min-h-[400px] bg-white py-8 flex flex-col items-center justify-start">
      {/* Feedbacks Section */}
      <div className="w-full max-w-5xl mb-8">
  <h2 className="text-5xl font-bold text-blue-600 mb-8 text-center">User Feedbacks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center transition duration-300 hover:shadow-lg hover:bg-blue-50">
              <div className="flex items-center mb-1">
                {[...Array(fb.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-2 text-sm">"{fb.feedback}"</p>
              <p className="text-blue-600 font-semibold text-xs">- {fb.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Feedback Form Section */}
      <div className="w-full max-w-md bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-green-600 mb-2">Leave Your Feedback</h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Feedback"
            className="border border-gray-300 rounded px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={3}
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            required
          />
          <div className="flex items-center gap-2">
            <label className="font-semibold text-sm">Rating:</label>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={rating}
              onChange={e => setRating(Number(e.target.value))}
            >
              {[5,4,3,2,1].map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <span className="text-yellow-400 text-lg">{'★'.repeat(rating)}</span>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition text-md">Submit Feedback</button>
        </form>
      </div>
    </div>
  )
}

export default Feedback

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="w-full min-h-[400px] bg-gray-50 py-12">
      {/* Top: About Us Heading */}
      <div className="w-full flex justify-center mb-10">
        <h2 className="text-5xl font-bold">
          <span className="text-blue-600">About</span>
          <span className="text-green-500 ml-2">Us</span>
        </h2>
      </div>
      {/* Main Content: Image and Description Side by Side */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-16">
        {/* Left: Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={assets.about_image}
            alt="About Us"
            className="border-4 border-blue-400 rounded-xl shadow-2xl"
            style={{ width: '420px', maxWidth: '100%', height: 'auto', background: '#f0f0f0', objectFit: 'cover' }}
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/420x280?text=Image+Not+Found'; }}
          />
        </div>
        {/* Right: Description */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-2">
          <p className="text-3xl text-gray-700 mb-6 font-semibold">Welcome to Prescripto!</p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform is dedicated to making healthcare accessible and convenient for everyone. We connect patients with top medical professionals, allowing you to book appointments with ease and confidence. Our team is committed to providing a seamless experience, ensuring your health and well-being are always our top priority.<br /><br />
            Whether you need a general physician, specialist, or pediatrician, our system is designed to help you find the right doctor for your needs. Thank you for trusting us with your healthcare journey.
          </p>
        </div>
      </div>

      <div>
    </div>
    <div className="w-full flex flex-col items-center mt-16 mb-8 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-600">Why</span> <span className="text-green-500">Choose Us?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:bg-blue-50 hover:shadow-xl hover:border-2 hover:border-blue-400">
            <span className="text-4xl mb-4 text-blue-500">⚡</span>
            <h4 className="text-xl font-semibold mb-2">Efficiency</h4>
            <p className="text-gray-600 text-center">Our streamlined process ensures you get the care you need quickly, minimizing wait times and maximizing results for your health journey.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:bg-blue-50 hover:shadow-xl hover:border-2 hover:border-blue-400">
            <span className="text-4xl mb-4 text-green-500">🕒</span>
            <h4 className="text-xl font-semibold mb-2">Convenience</h4>
            <p className="text-gray-600 text-center">Book appointments, access records, and communicate with professionals—all from one easy-to-use platform, anytime and anywhere.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:bg-blue-50 hover:shadow-xl hover:border-2 hover:border-blue-400">
            <span className="text-4xl mb-4 text-yellow-500">🎯</span>
            <h4 className="text-xl font-semibold mb-2">Personalization</h4>
            <p className="text-gray-600 text-center">Receive tailored recommendations and care plans that fit your unique needs, ensuring a truly personalized healthcare experience.</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About

import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="w-full min-h-[400px] bg-white py-12 flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="w-full flex justify-center mb-10">
        <h2 className="text-5xl font-bold">
          <span className="text-blue-600">Contact</span>
          <span className="text-green-500 ml-2">Us</span>
        </h2>
      </div>
      {/* Main Content: Image and Contact Info Side by Side */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-16">
        {/* Left: Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="border-4 border-blue-400 rounded-xl shadow-2xl"
            style={{ width: '420px', maxWidth: '100%', height: 'auto', background: '#f0f0f0', objectFit: 'cover' }}
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/420x280?text=Image+Not+Found'; }}
          />
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-2">
          <p className="text-2xl text-gray-700 mb-6 font-semibold">We're here to help!</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Reach out to us for any questions, support, or feedback. Our team is dedicated to providing you with the best service and assistance. You can contact us via email, phone, or by filling out the form below.
          </p>
          <div className="mb-4">
            <p className="text-md text-gray-700"><b>Email:</b> support@prescripto.com</p>
            <p className="text-md text-gray-700"><b>Phone:</b> +1 234 567 890</p>
            <p className="text-md text-gray-700"><b>Address:</b> 123 Health St, Wellness City, Country</p>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" required />
            <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" required />
            <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows={4} required />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

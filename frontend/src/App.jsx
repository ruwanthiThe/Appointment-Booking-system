import React from 'react'
import { useLocation } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppoinments from './pages/MyAppoinments'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Feedback from './pages/Feedback'

const App = () => {
  const location = useLocation();
  const showOnlyNavbar = location.pathname === '/login';
  return (
    <div className='mx-4 sm:mx-[10%]'>
  <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/doctors' element={<Doctors/>} />
        <Route path = '/doctors/:speciality' element={<Doctors/>} />
        <Route path = '/login' element={<Login/>} />
        <Route path = '/register' element={<Register/>} />
        <Route path = '/about' element={<About/>} />
        <Route path = '/contact' element={<Contact/>} />
        <Route path = '/my-profile' element={<MyProfile/>} />
        <Route path = '/my-appoinments' element={<MyAppoinments/>} />
        <Route path = '/appoinment/:docId' element={<Appoinment/>} />
        <Route path = '/feedback' element={<Feedback/>} />
      </Routes>
  {!showOnlyNavbar && <Footer />}
    </div>
  )
}

export default App

import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import UserFeedbacks from '../components/UserFeedbacks'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      {/* User Feedbacks Section */}
      <UserFeedbacks />
    </div>
  )
}

export default Home

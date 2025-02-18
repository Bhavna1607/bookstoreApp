import React from 'react'
import Navbars from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'


const Courses = () => {
  return (
    <>
      <Navbars/>
      <div className='min-h-screen'>
      <Course/>
      </div>
      
      <Footer/>

    </>
  )
}

export default Courses

import React from 'react'
import back from "../assets/frame.png"
import {Link} from "react-router-dom"

const Home = ({ isLoggedIn }) => {
  return (
    <div className='flex justify-center items-center h-full'>
      <img src={back} alt="back" width={600} height={40} loading="lazy" />
      <div className='absolute mb-20'>
          <div className='text-white text-3xl mx-4'>Welcome to Learnopia</div>
          <br/>
          <br/>
          <div className='flex flex-row gap-5'>

          <button className='border-4 rounded-2xl outline-white text-2xl text-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-white transition-colors duration-300 transform hover:scale-90'>
          <Link to="/Login">Students</Link>
          </button>
          <button className='border-4 rounded-2xl outline-white text-2xl text-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-white transition-colors duration-300 transform hover:scale-90'>
          <Link to="/Signup">Become an Educator</Link>
          </button>
        </div>

        </div>
      </div>
    
  )
}

export default Home
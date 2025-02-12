import React from 'react'

function Herosection() {
  return (
    <div className='bg-blue-400 flex'>
        <div>

        </div>
      <div className='bg-blue-500 rounded-full flex items-center'>
        <img className='h-72' alt = 'Developer' src = '/Christelle.png'></img>
      </div>
      <div className='w-64'>
        <h1 className='text-blue-600'>Hi I am Christelle</h1>
        <p className='w-48'>As a software designer with approximately one year of experience, I've had the opportunity to work on various projects, improving my skills in both frontend and backend development. During this time, I've gained proficiency in languages such as JavaScript,react-native, laravel, SQL and tailwind CSS framework.</p>
      <button className='bg-blue-500 py-6 px-4'>Hire me</button>
      </div>

    </div>
  )
}

export default Herosection

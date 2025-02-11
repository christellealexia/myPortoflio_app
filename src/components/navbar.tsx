import React from 'react'

export default function Navbar() {
  return (
    < div className="mt-7 px-32 flex gap-80 uppercase font-serif">
      <div>
        <p className='text-blue-800 font-bold '>Portofolio</p>
      </div>
      <div>
      <li className="flex list-none gap-10">
        <ul>Home</ul>
        <ul>About me</ul>
        <ul>Work</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
      </li>
      </div>
    </div>
  )
}

 

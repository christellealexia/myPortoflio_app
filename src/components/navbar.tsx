import React from 'react'

export default function Navbar() {
  return (
    < div className=" px-32 flex gap-64 uppercase">
      <div>
        <p>Portoflio</p>
      </div>
      <div>
      <li className=" flex list-none gap-10">
        <ul>HomePage</ul>
        <ul>About me</ul>
        <ul>Services</ul>
        <ul>Work</ul>
        <ul>Contact</ul>
      </li>
      </div>
    </div>
  )
}

 

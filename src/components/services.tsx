import React from 'react'
import Service from './service'

export default function Services() {

  const allServices = [
    {title:"Web/App development", description:"Crafting visually stunning websites that leave a lasting impression is our passion. With a keen eye for design and a focus on functionality, I create bespoke web experiences tailored to your brand."},
    {title:"UI/UX design", description:"We craft captivating user experiences through meticulous UI design. Our team blends aesthetics with functionality to create interfaces that captivate and engage users"},
    {title:"Project management", description:"As a project manager, I turn ideas into reality by leading every phase of your project with precision and care. From planning to delivery, I ensure smooth execution, keeping everything on track, on budget, and aligned with your vision."}
  ]
  return (
    <>
    <div>
      <div>
        <h1 className='text-center text-blue-500'>Services</h1>
        <h1 className='text-center'>What do I offer</h1>
        <p className='text-center'>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
      </div>
    <div className='px-32 py-4 flex gap-14 items-center justify-center'>
      {allServices.map((service) =>(
        <Service
         title = {service.title}
         description= {service.description} 
      />
      ))}
      </div>
    </div>  
      </>
  )
}
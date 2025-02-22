import React from 'react'
import { useState,useEffect } from 'react'


const words = ["Designer", "Developer", "Engineer"]

const ChangeText = () => {
   const [index,setIndex] = useState(0)

  useEffect(() =>{ 
  const interval = setInterval(()=> {
  setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 2000)
  return () => clearInterval(interval);
}, [])

return (
  <h1 className="text-4xl font-bold">
    Software{" "}
    <span key= {words[index]}
      className="text-blue-500"></span>
      {words[index]} 
  </h1>
)
};
export default ChangeText



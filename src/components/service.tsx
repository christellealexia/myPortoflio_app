import React from 'react'

interface Props {
    title: string,
    description:string
}
export default function Service(props:Props) {
  return (
    <div className="text-center text-black bg-white shadow-md rounded-md py-9">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}



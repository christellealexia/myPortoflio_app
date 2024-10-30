import React from 'react'

interface Props {
    title: string,
    description:string
}
export default function Service(props:Props) {
  return (
    <div className="text-center text-black bg-slate-100 rounded-md">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}



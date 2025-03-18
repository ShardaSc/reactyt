import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>
        
        <h1 className='text-2xl font-semibold mb-4'> Name : {props.name}</h1>
         <h2>Age : {props.age}</h2>
        <p></p>
    </div>
  )
}

export default Card

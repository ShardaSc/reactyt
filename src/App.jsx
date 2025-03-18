import React, { useState } from 'react'
import Card from './components/Card'
import E1 from './components/E1'

const users =[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28,
    "is_active": true
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 34,
    "is_active": false
  },
  {
    "id": 3,
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "age": 40,
    "is_active": true
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
    "age": 25,
    "is_active": true
  },
  {
    "id": 5,
    "name": "David Wilson",
    "email": "david.wilson@example.com",
    "age": 30,
    "is_active": false
  }
]

const App = () => {

  const user = "ABC"

  return (
    <div className='p-10'>
      {/* {users.map(function(elem,idx) {
        return  <E1 key={idx} id = {elem.id} name={elem.name} email={elem.email} age={elem.age}></E1>
      })} */}
      {/* <E1 user ={user}></E1>  props drilling*/}
    </div>
  )
}

export default App

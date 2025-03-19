import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import E1 from './components/E1'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'

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

  const [data,setData] =useState([])
  // const user = "ABC"
  const getdata =async () =>{
    const response =  await axios.get('https://picsum.photos/v2/list')
    setData (response.data)
  }
 useEffect(() => {
  getdata()
 })


  return (
    <div >
      {/* <button onClick={getdata} className='bg-teal-700 text-white text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button> */}
      {/* <div className='p-5 mt-5 bg-gray-950 text-white'></div> */}
      <Routes>
        <Route path='/about' element= {<AboutUs />}/>
      </Routes>
      {/* {
        data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-500 text-black flex items-center justify-between w-full px-7 py -6 rounded mb-3'>
            <img className = 'h-40 w-40'src={elem.download_url}></img>
            <h1>{elem.author}</h1>
            </div>
        })
      } */}
      {/* {users.map(function(elem,idx) {
        return  <E1 key={idx} id = {elem.id} name={elem.name} email={elem.email} age={elem.age}></E1>
      })} */}
      {/* <E1 user ={user}></E1>  props drilling*/}
    </div>

  )
}

export default App

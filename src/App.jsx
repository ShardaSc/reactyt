import React, { useState } from 'react'
import Card from './components/Card'


const App = () => {

  const [num, setNum] =useState(0)

  const [username, setUsername] =useState('')
  
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }

  return (
    <div>
      <Card a ='Abc'></Card>

    </div>
  )
}

export default App

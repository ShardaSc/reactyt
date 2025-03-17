import React, { useState } from 'react'


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
      <form onSubmit={(e)=>
        submitHandler(e)
        }>
        <input 
        value={username}
        onChange ={(e)=>{
          setUsername(e.target.value)
        }} placeholder='Enter name'></input>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App

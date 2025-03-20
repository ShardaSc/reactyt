import React from 'react'

const UserContext = ({children}) => {
    const username = "ABC"
  return (
    <div>
      {children}
    </div>
  )
}

export default UserContext

import React from 'react'
import E2 from './E2'
import { Link } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'

const E1 = (props) => {
  return (
    <>
    {/* I am example 1 
    <E2 user = {props.user}></E2> */}
    <Link to='/about'>About</Link>
    </>
  )
}

export default E1

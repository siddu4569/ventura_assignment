import React from 'react'
import { Link } from 'react-router'
import NavBar from '../../components/NavBar'

function Home() {
  return (
    <>
      <NavBar/>
      <Link to={"/ipo"}>Go to IPO Section</Link>
    </>
  )
}

export default Home
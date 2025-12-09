import React from 'react'
import { Outlet} from 'react-router'
import NavBar from '../../components/NavBar'

import Footer from '../../components/Footer';

function IPO() {
    
    return (
    <div className='relative w-[100vw] h-[fit] flex flex-col items-center md:px-10 px-5'> 
        <NavBar/>
        <div className='relative  w-full py-1 flex flex-col gap-5 lg:px-40 md:px-20 px-0 2xl:px-50'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default IPO
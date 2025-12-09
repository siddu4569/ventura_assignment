import React from 'react'
import IPOCard from './IPOCard'
import { IPO_DATA } from '../../utils/constant'

function OpenIPOs() {
  const openIPO = IPO_DATA.openIPO
  return (
    <div className=' flex flex-col  gap-10 '>
        <h1 className='text-3xl font-black lg:text-5xl xl:text-4xl'>Open <span className='text-primary'>IPOs</span></h1>
        <div className='flex flex-col md:flex-row gap-6 w-full'>
          {openIPO.map((val,idx)=><IPOCard key={val.name} companyData={val}/>)}
          
        </div>
    </div>
  )
}

export default OpenIPOs
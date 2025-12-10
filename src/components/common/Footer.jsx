
import React from 'react'
import {  WHITE_LOGO_URL } from '../../utils/constant'

function Footer() {
  return (
    <div className='bg-secondary relative w-full flex flex-col gap-4 rounded-3xl text-white p-10 pb-5'>

      <div className='flex flex-col gap-4 xl:gap-20 md:flex-row lg:gap-20 border-b border-[#ffffff11] pb-10 justify-center items-center'>

        <div className='flex flex-col gap-7 w-full md:w-1/3 items-center'>
            <div className='w-[120px] xl:w-[250px]'>
                <img className='object-cover h-full w-full' src={WHITE_LOGO_URL} alt="Logo" />
            </div>
        </div>

    </div>
      <div className='flex justify-center items-center w-full text-xs lg:text-sm xl:text-lg'>
        © 2025 Ventura. All rights reserved.
      </div>

    </div>
  )
}




export default Footer
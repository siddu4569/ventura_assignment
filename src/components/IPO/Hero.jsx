import React from 'react'
import { WHITE1_LOGO_URL} from '../../utils/constant'
function Hero() {
   
  return (
    <div className='relative flex w-full flex-col-reverse justify-end h-fit md:flex-row md:justify-between md:min-h-[40vh]  '>
        <div className='relative flex flex-col justify-around h-1/2 md:h-full md:w-2/3 gap-4'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl 2xl:text-5xl xl:text-5xl font-black leading-15'>IPO - <span className='text-primary'>Intial Public Offerings</span></h1>
            </div>
        </div> 
        <div className='h-1/3 flex justify-center items-center md:h-full md:w-2/3 '>
            <div className='relative rounded-full flex items-center justify-center border-1 border-[#00000020] h-11/12 aspect-square'>

            <div className='overflow-hidden rounded-full w-9/12 h-9/12'>
                <img className='object-cover h-full w-full rounded-full' src={WHITE1_LOGO_URL} alt="" />
            </div>

            </div>
    
        </div>

    </div>
  )
}

export default Hero
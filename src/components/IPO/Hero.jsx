import React, { useState } from 'react'
import { WHITE1_LOGO_URL} from '../../utils/constant'
import { ChevronRight } from 'lucide-react'

function Hero() {
    const [mobileNumber, setMobileNumber] = useState("");
    const handleChangeMobileNum = (e) => {
        const inpVal = e.target.value;
        if(isNaN(inpVal) || inpVal.length > 10 ) return;
        setMobileNumber(inpVal)
    }


  return (
    <div className='relative flex w-full flex-col-reverse justify-end h-fit md:flex-row md:justify-between md:min-h-[40vh]  '>


        <div className='relative flex flex-col justify-around h-1/2 md:h-full md:w-2/3 gap-4'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl 2xl:text-5xl xl:text-5xl font-black leading-15'>IPO - <span className='text-primary'>Intial Public <br /> Offerings</span></h1>
                <h1 className='text-xl  xl:text-2xl'>Identify the right IPOs to invest in with our research notes</h1>
            </div>

            <div className='relative w-full flex flex-col gap-1 '>
                <h3 className='text-md font-black 2xl:text-xl xl:text-xl'>Open an account</h3>

                <div className='flex bg-[#f8f8f8] h-19 items-center gap-4 p-2 rounded-xl justify-between w-fit  md:w-md '>
                    <div className='flex gap-4 w-full'>
                        <h1>+91</h1>
                        <input 
                        type="text" 
                        className='placeholder:text-sm ' 
                        placeholder='Enter your mobile number' 
                        value={mobileNumber} 
                        onChange={handleChangeMobileNum}/>
                   </div> 
                   <div className='bg-primary h-10/12 w-[60px] flex items-center justify-center rounded-xl p-3'><ChevronRight color={"white"} /></div>

                </div>
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
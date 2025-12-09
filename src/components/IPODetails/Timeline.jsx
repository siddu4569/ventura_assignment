import { Check } from 'lucide-react'
import React from 'react'
import { isFutureDate } from '../../utils/constant'

function Timeline({timeline}) {
  return (
    <div className='border-1 border-[#00000020] w-full p-5 rounded-2xl flex flex-col gap-4 '>
        <h3>IPO Timeline</h3>

        <div className='md:flex md:flex-row px-2 '>

            {timeline.map((val,idx,arr) => (
                <>
                <div className='flex md:flex-col gap-5 md:w-[500px]'>


                    <div className='flex flex-col md:flex-row items-center '>
                        <div 
                        className={`h-[45px] w-[45px] rounded-full ${isFutureDate(val.date) ? "bg-[#e0dFe7] ": "bg-green-600"} flex justify-center items-center overflow-hidden`}
                        >
                            {!isFutureDate(val.date) && <Check color='white' />}
                        </div>

                        {idx !== timeline.length-1 && (
                        <div className={`h-[45px] w-[3px] md:h-[3px] md:w-[calc(100%-45px)] ${isFutureDate(arr[idx+1].date) ? "bg-[#e0dFe7] ": "bg-green-600"}`}></div>)}

                    </div>

                    <div className='text-[11px] '>
                        <h1>{val.label}</h1>
                        <h1>{val.date}</h1>
                    </div>
            
                </div>

                </>


            ))}
        </div>
        

    </div>
  )
}

export default Timeline
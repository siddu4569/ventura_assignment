import React, { useState } from 'react'
import IPOCompanyList from './IPOCompanyList';

function UpcomingIPO() {
    let [selectedIPOType,setSelectedIPOType] = useState('Upcoming');
    
    return (
        <div className='relative h-fit flex flex-col gap-10'>
            
            <h1 className='text-3xl font-black text-center lg:text-5xl xl:text-4xl'>Upcoming & recent <span className='text-primary'>IPOs</span></h1>
            
            <div className='w-full h-full p-4 rounded-3xl bottom-1 border-[#00000020] border-1'>
                
                <div className='flex  items-center h-15 relative  w-full cursor-pointer '>
                    {["Upcoming", "Closed", "Listed"].map((tab, idx) => (
                        <div 
                        onClick={() => setSelectedIPOType(tab)}
                        key={tab}
                        className={`h-[90%] border-2 border-transparent ${selectedIPOType == tab ? "border-b-primary font-black" : ""} flex items-center  justify-center w-1/3 
                        hover:border-b-primary hover:border-b-2 hover:font-black text-sm lg:text-xl xl:text-xl`}>
                        {tab}
                        </div>
                    ))}
                </div>

                 <IPOCompanyList listingType={selectedIPOType}/>
            </div>
            
            <div>
            </div>
        </div>
  )
}

export default UpcomingIPO
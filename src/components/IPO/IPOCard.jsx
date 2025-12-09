import React from 'react'
import { Link } from 'react-router'

function IPOCard({companyData}) {
    let {name, date,issueSize, priceBand,companyLogo,lotValue,lotSize} = companyData;
    const urlCompanyName = name.split(" ").join("-").toLowerCase();


    return (
    <Link to={`/ipo/${urlCompanyName}`}>
        <div className=' w-[full] md:w-[350px] h-[300px] xl:w-[480px] xl:h-[350px]  flex flex-col justify-between  border-1 border-[#00000020] rounded-xl overflow-hidden  shadow-2xl'>
        

            <div className='p-4 flex flex-col gap-3'>
                <div className='overflow-hidden rounded-full h-15 w-15  xl:h-20 xl:w-20'>
                    <img src={companyLogo} className='object-cover h-full w-full rounded-full'/>
                </div>
                <h2 className='font-black text-md truncate xl:text-xl '>{name}</h2>
                <p>{date}</p>
            </div>

            <div className='flex flex-wrap justify-between bg-[#f8f8f8] h-1/2  p-4'>
                <div className='w-1/2 text-xs md:text-md'>
                    <h4 className='text-[#6B6874] lg:text-sm xl:text-sm'>Issue Size</h4>
                    <h4 className='font-black text-xs lg:text-sm xl:text-sm'>{issueSize}</h4>

                </div>
                <div className='w-1/2'text-xs md:text-md>
                    <h4 className='text-[#6B6874] lg:text-sm xl:text-sm'>Price Range</h4>
                    <h4 className='font-black text-xs lg:text-sm xl:text-sm'>{priceBand}</h4>

                </div>
                <div className='w-1/2'text-xs md:text-md>
                    <h4 className='text-[#6B6874] lg:text-sm xl:text-sm'>Min. Amount</h4>
                    <h4 className='font-black text-xs lg:text-sm xl:text-sm'>{lotValue}</h4>

                </div>
                <div className='w-1/2'text-xs md:text-md>
                    <h4 className='text-[#6B6874] lg:text-sm xl:text-sm'>Min. Qty.</h4>
                    <h4 className='font-black text-xs lg:text-sm xl:text-sm'>{lotSize}</h4>

                </div>
            </div>


            

        </div>
    </Link>
  )
}

export default IPOCard
import React from 'react'
import { IPO_DATA, NO_IPO_IMAGE_URL } from '../../utils/constant'
import { Link } from 'react-router';
import IPOCard from './IPOCard';

function IPOCompanyList({listingType}) {
    const companyData = IPO_DATA[listingType];
    
    if(companyData.length == 0) {
        return (
            <div className='flex items-center justify-center flex-col h-[60vh] xl:h-[50vh]'>
                <img src={NO_IPO_IMAGE_URL}></img>
                <h3 className=' text-xl lg:text-xl xl:text-xl'>No Upcoming IPOs now.</h3>
            </div>
        )
    }

    return (
        
        <div className='relative flex flex-col w-full py-5 h-fit'>
            <div className='flex bg-[#f8f8f8]' >
                {["Company","Issue size","Price range","Min. Amount"].map((val, idx)=>
                    <div key= {val} className='hidden relative w-1/4 md:flex justify-center text-xs md:text-sm lg:text-sm xl:text-lg' >
                        {val}
                    </div>
                )}
            </div>


            {companyData.map((val, idx)=>
            <Link to={`/ipo/${val?.name.split(" ").join("-").toLowerCase()}`} key={val.name}>
                <div className='hidden md:flex justify-between py-3' >

                <div className='flex gap-2 w-1/4'>
                    <div >
                        <img className='h-5' src={val?.companyLogo}></img>
                    </div>
                        <div className='flex flex-col'>
                            <h4 className='font-black text-xs md:text-sm lg:text-sm xl:text-lg' >{val?.name}</h4>
                            <p className='text-xs text-[#0000008f] lg:text-sm xl:text-sm'>{val?.date}</p>
                        </div>
                   
                </div>



                <div className='w-1/4  justify-center flex font-black md:text-sm text-xs lg:text-sm xl:text-lg'>{val?.issueSize}</div>
                <div className='w-1/4  justify-center flex font-black md:text-sm text-xs lg:text-sm xl:text-lg'>{val?.priceBand}</div>

                <div className='flex-col w-1/4 flex items-center'>
                    <h4 className='font-black md:text-sm text-xs lg:text-sm xl:text-lg'>{val?.lotValue}</h4>
                    <p className='text-xs text-[#0000008f] lg:text-sm xl:text-sm'>{val?.lotSize}</p>
                </div>
               
                </div> 

                
                <div className='md:hidden'>
                    <IPOCard companyData={val}/>
                </div>

                
                <div className='bg-[#ffeee5] w-full flex items-center justify-center h-10 font-bold rounded-xl md:text-sm text-xs lg:text-sm xl:text-lg'>
                    {listingType === "Closed" ? val?.subscribed : `Listed at ${val?.listedAt} with  ${val?.gain} gains.`}
                </div>

            </Link>
        )}

        </div>
    )
}

export default IPOCompanyList
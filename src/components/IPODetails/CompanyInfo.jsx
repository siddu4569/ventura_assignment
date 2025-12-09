import React, { useState } from 'react'
import GoBack from '../GoBack'
import { ChevronLeft } from 'lucide-react'
import { useLocation } from 'react-router';
import Timeline from './Timeline';
import { DOWNLOAD_BTN } from '../../utils/constant';

function CompanyInfo({companyInfo}) {
    let {companyLogo,date, issueSize, priceBand,name,lotValue,lotSize, listedAt, gain, listedOn, financials, timeline} = companyInfo;
    let [selectedSection, setSelectionSection] = useState("Revenue");


    let currPath = useLocation();
    return (
        <div className='flex flex-col gap-5 relative h-[100%] w-[100%] pb-7 lg:w-[80%] '>
        
            <div className='h-20  w-full flex items-center '>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-5 items-center'>
                        <div className='p-2 border-1 border-[#00000020] rounded-xl h-3/4 flex items-center justify-center' >
                            <GoBack path={currPath.pathname}><ChevronLeft /></GoBack>
                        </div>
                        

                        <div className='flex gap-2 items-center'>
                            <img src={companyLogo} alt="" className='h-[40px] w-[40px] rounded-full border-1 border-[#00000020]'/>
                            <div>
                                <h2 className='font-black'>{name.split(" ")[0].toUpperCase()}</h2>
                                <h2 className='text-[#6b6874] text-sm'>{companyInfo.name}</h2>
                            </div>
                        </div>

                        
                    </div>
                    <div className='flex justify-center items-center'>
                            <a href="https://ipo.ventura1.com/aceipo/Admin/reports/3066.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={DOWNLOAD_BTN}></img>
                            </a>
                    </div>
                </div>
            
            </div>


            <div className='border-1 border-[#00000020] w-full p-5 rounded-2xl gap-8 flex flex-col'>
                <h3 className='text-sm'>IPO Details</h3>


                <div className=' h-fit flex flex-col justify-between  text-sm'>
                    <div className='flex flex-wrap justify-between h-full '>
                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Issue Size</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{issueSize}</h4>

                        </div>

                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Price Range</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{priceBand}</h4>

                        </div>

                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Minimum Amount</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{lotValue}</h4>

                        </div>
                        
                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Lot size</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{lotSize}</h4>

                        </div>

                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Issue Dates</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{date}</h4>

                        </div>
                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Listed On</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{listedOn}</h4>

                        </div>
                       
                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Listed Price</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{listedAt}</h4>

                        </div>


                        <div className='w-1/2 flex flex-col gap-1 md:w-1/3 text-xs lg:w-1/4 md:text-sm pb-3 '>
                            <h4 className='text-[#6B6874] text-[10px] md:text-[12px]'>Listed Gains</h4>
                            <h4 className='font-medium text-xs md:text-sm lg:text-sm'>{gain}</h4>

                        </div>
                    </div>

                </div>

            </div>

            <Timeline timeline= {timeline}/>

            


            <div className='border-1 border-[#00000020] w-full p-5 rounded-2xl '>
                <h3>About the company</h3>
                <p className='text-sm text-[#6b6874]'>Established in 1996, Swastika commenced operations with the object of business of aluminium casting by setting up a foundry, which was a very unique concept at that time.Presently the company has advanced machining, inspection and testing facilities in India which is backed with an efficient team of metallurgists and professionals.The company now supplies the casting as original equipment (ready to use component) to reputed Companies in India and also exports to parts of Europe, and U.S.A.
                
                </p>

            </div>
            
            <div className='relative border-1 border-[#00000020] w-full p-5 rounded-2xl h-[350px] flex flex-col gap-5'>
                <h3>Company Financials</h3>

                <div className='flex bg-[#f8f8f8]'  > 
                    {["Revenue","Total Assets","Profit"].map((val, idx)=>
                    <div 
                    onClick={()=>setSelectionSection(val)} 
                    key= {val} 
                    className={ `relative w-1/3 flex justify-center text-xs md:text-sm p-2 rounded-xl
                    ${selectedSection == val ? "bg-secondary text-white" : ""}`} >
                        {val}
                    </div>
                    )}
                </div>


                <div className='bg-[#f8f8f8] h-[200px] flex flex-col gap-5 p-3'>
                    {
                        financials.map((val, idx)=> (
                            <div className='flex gap-2 items-center text-sm' key={idx}>
                                <h4 className='text-sm'>{val.year}</h4>
                                <div className='h-2 w-3 rounded-3xl ' id={`bar${idx+1}`}></div>
                                <div className='h-[32px] w-30 md:w-45 lg:w-100 rounded-r-md' id={`bar${idx+1}`}></div>
                                <div className='text-xs md:text-sm'>{val[selectedSection.split(" ").map((val,idx)=>(idx==0 ? val.toLowerCase() : val)).join("")]}</div>
                            </div>
                        ))
                    }
                    

                </div>

            </div>

            
            

        </div>
  )
}

export default CompanyInfo
import {Instagram, Linkedin, MapPin, TwitterIcon, Youtube } from 'lucide-react'
import React from 'react'
import { LOGO_URL, WHITE_LOGO_URL } from '../utils/constant'

function Footer() {
  return (
    <div className='bg-secondary relative w-full flex flex-col gap-4 rounded-3xl text-white p-10 pb-5' >

        <div className='flex flex-col  gap-4 xl:gap-20 md:flex-row lg:gap-20 border-b-1 border-b-[#ffffff11] pb-10'>

            <div className='flex flex-col gap-7 w-full md:w-1/3'>
                <div className='w-[120px] xl:w-[250px] '>
                    <img className='object-cover h-full w-full object-contains' src={WHITE_LOGO_URL}></img>
                </div>

                <div className='flex gap-2 items-center'>
                    <div><MapPin /></div>
                    <div className='flex flex-col gap-2.5'>
                        <h1 className='text-md 2xl:text-2xl xl:text-lg'>Corporate Address</h1>
                        <p className='text-sm lg:text-sm xl:text-lg lg:leading-9  leading-6'>
                            Ventura Securities Limited,
                           8th Floor,Pokhran Road No. 2, Off.
                             Eastern Express Highway,Thane (West) - 400 607
                        </p>
</div>
                </div>


                <div className='flex gap-3 xl:gap-6'>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><TwitterIcon /></div>
                    
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Linkedin /></div>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Youtube /></div>
                    <div className='bg-[#ffffff1f] p-3 xl:p-6 rounded-xl hover:bg-primary'><Instagram /></div>
                </div>

            </div>



            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Company</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="about-us">About us</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="contact-us">Contact us</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="careers">Careers</a>
                    
                </div>
            </div>


            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Products</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Stocks</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Mutual Funds</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">Futures & Options</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary' href="">IPO</a>
                    
                </div>
            </div>

            <div className='flex flex-col gap-5'>

                <h3 className='font-bold text-lg lg:text-lg xl:text-lg '>Quick Links</h3>

                <div className='flex flex-col gap-3'>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Blog</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>News</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Share Market Guide</a>
                    <a className='text-xs lg:text-sm xl:text-lg hover:text-primary'>Share Market Glossary</a>
                  
                </div>

            </div>
            




        </div>



        
        <div className='flex justify-center items-center w-full text-xs lg:text-sm xl:text-lg '>© 2025 Ventura. All rights reserved.</div>
<div className='flex justify-center items-center w-full text-xs lg:text-sm xl:text-lg '>Built with ❤️ in India.</div>
    </div>
  )
}

export default Footer
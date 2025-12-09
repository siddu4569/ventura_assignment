import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router'
import { Menu } from 'lucide-react'

function NavBar() {
  return (
    <div className='flex justify-between gap-20  w-full py-[18px] border-b-[0.5px] border-[#00000018]'>

      <div className='flex  gap-8 items-center cursor-pointer'>
        <Link to={'/ipo'}><img src={LOGO_URL} className=' w-[120px] xl:w-[150px] object-contains'/></Link>
        
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Invest</div> 
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Trade</div>
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Spotlight</div>
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Ease API</div>
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Pricing</div>
        <div className='hover:text-primary text-[14px] xl:text-sm 2xl:text-lg hidden lg:flex'>Learn</div>
      </div>

      <div className='flex gap-5' >
        <div className='rounded-xl border-2 text-secondary px-4 py-3 text-sm font-bold  justify-center items-center hidden lg:flex'>Login</div>
        <div className='rounded-xl bg-secondary text-white px-4 py-3 text-sm justify-center items-center hidden lg:flex' >Create Account</div>


        <div className='flex justify-center items-center lg:hidden'><Menu color='#191442' /></div>
      </div>
    
    </div>
  )
}

export default NavBar
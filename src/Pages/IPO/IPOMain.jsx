import Hero from '../../components/IPO/Hero';
import OpenIPOs from '../../components/IPO/OpenIPOs';
import UpcomingIPO from '../../components/IPO/UpcomingIPO';


function IPOMain() {
  
  return (
    <div className='w-full relative flex flex-col gap-15  h-fit '>
      <Hero/>
      <OpenIPOs/>
      <UpcomingIPO/>
    </div>
  )
}

export default IPOMain
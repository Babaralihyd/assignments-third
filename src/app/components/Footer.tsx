import React from 'react'
import { RiSofaFill } from "react-icons/ri";

const FooterPage = () => {
  return (
   <div className='w-full h-[343px] bg-[#FFFFFF] '>

    <div className='grid grid-row-3  w-full h-[198px] '>
      <div className=' flex row-span-1 w-full h-[40px] gap-2 '>
      <RiSofaFill className='  w-[40px] h-[40px] text-[#029FAE]' />
      <h1 className='   w-[120px] h-[31px] font font-inter font-medium text-[26px] leading-[31.2px] text-[#272343]'>Comforty</h1>


     </div>
      <div className=' row-span-1  '> <h1 className="w-[350px] h-[72px] font-inter  font-normal text-[16px] leading-[24px] text-[#272343]"> Vivamus tristique odio sit amet velit semper,  eu posuere turpis interdum.</h1>
        </div>

      <div className='row-span-3 flex w-[206px] h-[38px] gap-1 '>
      <img src="facebook.svg" alt="logo" className='w-[38px] h-[38px] border-[1px] border-[#007580] rounded-[20PX]' />
        <img src="Group 46.svg" alt="logo" className='w-[38px] h-[38px]' />
        <img src="Group 47.svg" alt="logo" className='w-[38px] h-[38px] ' />
        <img src="Group 48.svg" alt="logo" className='w-[38px] h-[38px] ' />
        <img src="Group 50.svg" alt="logo" className='w-[38px] h-[38px]' />

        
      </div>
  
    

    </div>
   </div>
    
  )
}

export default FooterPage


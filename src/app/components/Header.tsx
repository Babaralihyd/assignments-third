
import { FaCheck } from "react-icons/fa6";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { RiSofaFill } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";


import React from 'react'

const Header = () => {
  return (

    <div>
    <div className="grid grid-cols-2  sm:grid-cols-2  w-full h-[45px] justify-center  text-center bg-[#272343] ">
      <div className="col-span-1   gap-1 w-full  h-[16px]  py-[14px]  "> 
        <h1 className=" flex  justify-center items-center text-center   gap-2 font-Inter w-full  h-[14px] font-normal text-[13px] leading-[14.3px]  text-[#ffffff]">
        <FaCheck className='  text-[#ffffff]' />Free shipping on all orders over $50 </h1>
      </div>

      <div className="col-span-1 sm:span-cols-1 py-[14px]  flex justify-center text-center w-full  h-[17px] gap-6 opacity-[70%] "> 
                  <select name='select' id-1 className='  border-[#ffffff]  text-[#ffffff] bg-[#272343]  justify-center items-center font-Inter w-[37px] h-[17px]  gap-[6px] text-[13px] ' >  
               <option value={"English"}> English </option> 
               </select>
                 <button  className='  font-Inter flex w-[30px] h-[17px] font-normal text-[13px]  leading-[16.9px] text-[#FFFFFF]'> Faqs </button>
           

               <div className=' flex items-center font-Inter w-[87px] h-[17px] gap-[6px]  text-[#FFFFFF]' >
                   <AiTwotoneExclamationCircle className=' flex gap-2 '/>
               <button className=' flex font-Inter w-[65px] h-[17px] font-normal text-[13px] text-center leading-[16.9px] text-[#FFFFFF]'> Need Help </button>
               </div>

      </div>
    </div>





<div className="grid grid-cols-2  sm:grid-cols-2  w-full h-[84px]  py-[20px]  bg-[#F0F2F3]">

<div className=' col-span-1  sm:span-cols-1 flex  justify-center items-center  gap-[8px] w-full h-[40px] '>
<RiSofaFill className='  w-[40px] h-[40px] text-[#029FAE]' />
<h1 className='   w-[118px] h-[31px] font font-inter font-medium text-[26px] leading-[31.2px] text-[#272343]'>Comforty</h1>


</div>
 <div className="col-span-1  sm:span-cols-1 justify-center flex items-center  w-full  h-[44px]  ">
<div className=' ml-[120px] justify-center flex items-center w-[120px] h-[44px] gap-[12px] bg-[#FFFFFF]'>
            <div className=' flex justify-center items-center text-center w-[56px] h-[22px] gap-2'>
           <BsCartDash className=' w-[22px] h-[22px] '  />
           <h1 className='w-[26px] h-[13px] font-Inter font-medium text-center leading-[13.2px]'>Cart</h1>
        
           </div>
          
           <div className="w-[22px] h-[22px]  ">  <p className="bg-[#007580] rounded-[20px] text-center  font-normal"> 2</p> </div>
           </div>

</div>
</div>  
<div className="grid grid-cols-2 sm:grid-cols-2 w-full justify-center items-center text-center bg-[#FFFFFF]">
  <div className="col-span-1 sm:span-cols-1 flex justify-center text-center gap-12 text-[#636270]">
    <ul className="flex justify-center gap-12">
      <li><a href="/" className="text-[#007580] font-Inter font-medium text-[14px]">Home</a></li>
      <li><a href="/shop" className="font-Inter font-medium text-[#636270] text-[14px]">Shop</a></li>
      <li><a href="/Products" className="font-Inter font-medium text-[#636270] text-[14px]">Product</a></li>
      <li><a href="/pages" className="font-Inter font-medium text-[#636270] text-[14px]">Pages</a></li>
      <li><a href="/about" className="font-Inter font-medium text-[#636270] text-[14px]">About</a></li>
    </ul>
  </div>
  
  <div className="col-span-1  sm:col-span-1-cols-1 flex justify-center items-center text-center gap-2 py-[14px]">
    <h1 className="font-Inter font-normal text-[#636270] text-[14px]">Contact:</h1>
    <h2 className="font-Inter font-medium text-[#272343] text-[14px]">(808) 555-0111</h2>
  </div>
</div>
 

           
          

</div>
        










  )
}

export default Header




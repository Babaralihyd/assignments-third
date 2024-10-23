import React from 'react';
import Image from 'next/image';
import carimage from '../components/car.jpg'; // Ensure this path is correct

const Heropage = () => {
  return (
    <div className='h-screen bg-slate-300 flex'>
      <div className='pl-9 my-40'>
        <h1 className='text-3xl bg-red-700 mx-80 text-yellow-500 rounded-3xl'>
          Car Brands and Their Models
        </h1>
        <p className='space-x-6 text-xl text-amber-950'>
          This list highlights the diverse range of car brands available, showcasing their respective models and production numbers. From the high volumes of Toyota and Suzuki to the more niche offerings of brands like Lexus and Proton, there's a vehicle for every preference and need in today’s automotive market.
        </p>
        <Image  className=' mx-80 my-16 justify-center  rounded-3xl  '
          src={carimage} 
          alt="Car"
          width={500} 
          height={200} 
        />

        <button className='bg-fuchsia-600 px-3 py-2 rounded-2xl text-sky-950 hover:bg-rose-600 hover:text-black mx-80 '  >Buy Now </button>
        <button className='bg-orange-600  px-3 py-2 rounded-2xl text-slate-900 hover:bg-rose-900 hover:text-black'>Order Now  </button>
      </div>
    </div>
  );
}

export default Heropage;

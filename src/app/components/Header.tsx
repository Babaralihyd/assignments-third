import React from 'react'
import Link from 'next/link'


function HeaderPage() {
  return (
    <div>
      <header className='bg-orange-400 py-4   ps-5 border-solid '>
        <nav className='flex  justify-between items-center px-6 ' >
            <div className=' text-3xl text-red-600 text border-spacing-y-2.5'>
            
                <h1 className='rounded-2xl bg-zinc-800 text-ellipsis '>  Auto Haven  </h1>
            </div>
        
        <ul className='flex-grap  '>
            <li className='space-x-9 font-bold '>
            <Link  href  = "/" className='hover:text-amber-300 mx-4 ' >Home</Link>
             <Link  href  = "/" className='hover:text-slate-500'>New Car</Link>
             <Link  href  = "/" className='hover:text-orange-700' >Used Car</Link>
              <Link  href  = "/" className='hover:text-green-500'>Auto Store</Link>
              <Link  href  = "/about" className='hover:text-yellow-500' >About</Link>
              <button className='bg-purple-800  px-3 py-2 rounded-2xl text-white hover:bg-rose-900 hover:text-black'>log in</button>
            </li>
        </ul></nav>
      </header>
    </div>
  )
}

export default HeaderPage

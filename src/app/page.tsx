import React from 'react'

import HeaderPage from './components/Header'
import FooterPage from './components/Footer'
import HeroPage from './components/Hero'

const HomePage = () => {
  return (
    <div className='h-screen'>
      <HeaderPage/>
      <HeroPage/>
      {/* <FooterPage/> */}
    </div>
  )
}

export default HomePage

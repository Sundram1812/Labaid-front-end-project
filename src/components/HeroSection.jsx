import React from 'react'
import CallBackForm from './CallBackForm'
import HeroSectionMovingSec from './HeroSectionMovingSec'

function HeroSection() {
  return (
    <div className=' flex w-10/12 mx-auto my-6 justify-between items-center z-0'>
        <div className=' basis-[45%]'>
            <HeroSectionMovingSec/>
        </div>
        
        <div className=' basis-[45%] relative'>
            <CallBackForm/>
        </div>
    </div>
  )
}

export default HeroSection
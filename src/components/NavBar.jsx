import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function NavBar() {
  return (
    <div className=' bg-[#eb2026] py-3 mt-6 sticky top-0 z-50'>
        <div className=' w-10/12 mx-auto'>
            <ul className='flex justify-between items-center'>
                <NavLink to={"/"} className=' text-white text-[1.3rem] font-semibold'>Home</NavLink>
                <NavLink to={"/about-us"} className=' text-white text-[1.3rem] font-semibold'>About Us</NavLink>
                <NavLink to={"/find-a-test"} className=' text-white text-[1.3rem] font-semibold'>Book a Test</NavLink>
                <NavLink to={"/labaid-partner"} className=' text-white text-[1.3rem] font-semibold'>Franchise Partner</NavLink>
                <NavLink to={"/home-collection"} className=' text-white text-[1.3rem] font-semibold'>Home Collection</NavLink>                
                <NavLink to={"/contact-us"} className=' text-white text-[1.3rem] font-semibold'>Contact Us</NavLink>              
            </ul>
        </div>
    </div>
  )
}

export default NavBar
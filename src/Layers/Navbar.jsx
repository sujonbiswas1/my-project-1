import { useState } from "react"
import { Link, NavLink } from "react-router"

import images from '../images/Logo.png'
const Navbar = () => {
  const [isopen,setisopen] = useState(false)
  const toggleMenu = ()=>(
    setisopen(!isopen)
  )
  return (
    <div className="py-5 z-50 sticky top-0 mx-auto bg-black">
      <div className="flex  px-4 sm:px-6 md:px-8 lg:px-14 container mx-auto justify-between ">
         <div className="flex items-start">
         <Link to='/'> <img src={images} className="w-[110px] cursor-pointer" alt="" /> </Link> 
        </div>

         <div className="md:flex hidden gap-6 ">
          <NavLink to="/about" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">About Us</NavLink>
          <NavLink to="/web" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Web3ATL</NavLink>
          <NavLink to="/accelerator" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Accelerator</NavLink>
          <NavLink to="/blog" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Blog</NavLink>
          <NavLink to="/contact" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Contact</NavLink>

        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-4xl font-bold inline-flex items-center justify-center">
            {!isopen?'o':'x'}
          </button>

        </div>

        {
          isopen &&(
            <div className="md:hidden">
              <div className="flex flex-col px-14 py-14 space-y-3 text-2xl text-white bg-black w-[60rem]">

                <NavLink to="/about" onClick={isopen} className="">About Us</NavLink>
               <NavLink to="/web" className="" onClick={isopen}>Web3ATL</NavLink>
               <NavLink to="/accelerator" className="" onClick={isopen}>Accelerator</NavLink>
              <NavLink to="/blog" className="" onClick={isopen}>Blog</NavLink>
              <NavLink to="/contact" className="" onClick={isopen}>Contact</NavLink>

              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar